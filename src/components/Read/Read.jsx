import { Component, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";


const Read = () => {
    const Book =useLoaderData();

const [appliedJobs, setAppliedJobs] = useState([]);
// sort
const [displayJobs, setDisplayJobs] = useState([]);
  

const handleJobsFilter = filter =>{
    if(filter === 'all'){
        setDisplayJobs(appliedJobs);
    }
    else if (filter === 'Rating'){
        const ratingBooks = appliedJobs.filter(job => job.rating === '4.7')
        setDisplayJobs(ratingBooks);
    }
    else if (filter === 'Number'){
        const NumberBooks = appliedJobs.filter(job => job.totalPages === '324')
        setDisplayJobs(NumberBooks);
    }

}
// sort

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
            setDisplayJobs(jobsApplied);
            
            // console.log(Book,storedJobIds, jobsApplied);

        }
    }, [Book])

    return (
        // sort
        <div>
            <details className="dropdown">
  <summary className="m-1 btn">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li onClick={() => handleJobsFilter('all')}><a>Sort Buy</a></li>
    <li onClick={() => handleJobsFilter('Rating')}><a>Rating</a></li>
    <li onClick={() => handleJobsFilter('Number')}><a>Number of pages</a></li>
    <li><a>Published year</a></li>
  </ul>
</details>

{/* sort */}
            <ul>
                {
                    displayJobs.map(job => <li key={job.bookId}>
                
                
                <div className="container mx-auto mt-10 card card-side bg-base-100 shadow-xl">
  <div className="lg:flex">
  <div>
  <img className="w-64 " src={job.image} alt="Movie"/>
  </div>
  <div className="card-body">
    <h1 className="font-bold text-2xl">{job.bookName}</h1>
    <h1>By: {job.author} </h1>
    <div className="lg:flex gap-5">
        <div className="font-bold">tag</div>
        <div><button className="border-2 rounded-lg bg-green-100 text-green-500">#{job.tags[0]}</button></div>
        <div><button className="border-2 rounded-lg bg-green-100 text-green-500">#{job.tags[1]}</button></div>
        <div> Year of Publishing: {job.yearOfPublishing}</div>
    </div>

    <div className="lg:flex gap-10">
        <div> publisher:   { job.publisher} </div>
        <div> page: {job.totalPages}</div>
    </div>

    <div className="w-full border-t border-gray-300 border-line my-4"></div> 

    <div className=" lg:flex gap-10 ">
        <div><button className="border-2  w-auto h-10 rounded-lg bg-blue-100 text-blue-500 mt-2">category:{job.category}</button></div>
        <div><button className="border-2  w-auto h-10 rounded-lg bg-red-100 text-red-500 mt-2">rating:{job.rating}</button></div>
        <Link to={`/job/${job.bookId}`}><button className="bg-green-500 btn border-2  w-auto h-10 rounded-lg mt-2">View Details</button></Link>
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