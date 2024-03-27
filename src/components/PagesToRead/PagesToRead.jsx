
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { getStoredJobApplication } from '../../utility/localstorage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];



const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function App() {
    const [appliedJobs, setAppliedJobs] = useState([]);
    const Book =useLoaderData();

    useEffect( () =>{
        const storedJobIds = getStoredJobApplication();
        if(Book.length > 0){
            
            const jobsApplied = [];
            for (const bookId of storedJobIds){
                const job = Book.find(job => job.bookId === bookId);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            // setDisplayJobs(jobsApplied);
            
            // console.log(Book,storedJobIds, jobsApplied);

        }
    }, [Book])


  return (
    
    
        <ResponsiveContainer height={400}>
        <BarChart
      width={1300}
      height={400}
      data={appliedJobs}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 20,
      }}
      
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis   dataKey="bookName" />
      <YAxis  />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {appliedJobs.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </ResponsiveContainer>
    
   
  );
}