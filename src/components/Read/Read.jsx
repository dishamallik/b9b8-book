import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";


const Read = () => {
    const Book =useLoaderData();

const [appliedJobs, setAppliedJobs] = useState([]);

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
            // console.log(Book,storedJobIds, jobsApplied);

        }
    }, [])

    return (
        <div>
            


            <ul>
                {
                    appliedJobs.map(job => <li key={job.bookId}>
                
                
                <div className="  container mx-auto mt-10 card card-side bg-base-100 shadow-xl">
  <div className="lg:flex">
  <div>
  <img className="w-64 " src={job.image} alt="Movie"/>
  </div>
  <div className="card-body">
    <h1 className="font-bold text-2xl">{job.bookName}</h1>
    <h1>By: {job.author} </h1>
    <div className="flex gap-5">
        <div className="font-bold">tag</div>
        <div><button className="border-2 rounded-lg bg-green-100 text-green-500">#{job.tags[0]}</button></div>
        <div><button className="border-2 rounded-lg bg-green-100 text-green-500">#{job.tags[1]}</button></div>
        <div> Year of Publishing: {job.yearOfPublishing}</div>
    </div>

    <div className="flex gap-10">
        <div> publisher:   { job.publisher} </div>
        <div> page: {job.totalPages}</div>
    </div>

    <div className="w-full border-t border-gray-300 border-line my-4"></div> 

    <div className="flex gap-10">
        <div><button className="border-2  w-auto h-10 rounded-lg bg-blue-100 text-blue-500">category:{job.category}</button></div>
        <div><button className="border-2  w-auto h-10 rounded-lg bg-red-100 text-red-500">rating:{job.rating}</button></div>
        <div><button className="bg-green-500 btn">View Details</button></div>
    </div>
    
  </div>
  </div>
</div>



                    </li>)
                }
            </ul>
            
        </div>
    );
};

export default Read;