import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication1 } from "../../utility1/localstorage1";

const Wishlist = () => {
    const Book =useLoaderData();

    const [appliedJobs1, setAppliedJobs1] = useState([]);
    
        useEffect( () =>{
            const storedJobIds1 = getStoredJobApplication1();
            if(Book.length > 0){
                
                const jobsApplied1 = [];
                for (const bookId of storedJobIds1){
                    const job = Book.find(job => job.bookId === bookId);
                    if(job){
                        jobsApplied1.push(job)
                    }
                }
                setAppliedJobs1(jobsApplied1);
                // console.log(Book,storedJobIds, jobsApplied);
    
            }
        }, [])


    return (
        <div>
            
            <ul>
                {
                    appliedJobs1.map(job => <li key={job.bookId}>
                
                
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
        <Link to={`/job/${job.bookId}`}><button className="bg-green-500 btn">View Details</button></Link>
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

export default Wishlist;