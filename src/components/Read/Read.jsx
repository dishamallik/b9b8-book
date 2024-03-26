import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";


const Read = () => {
    const Book =useLoaderData();

const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect( () =>{
        const storedJobIds = getStoredJobApplication();
        if(Book.length > 0){
            // const jobsApplied = Book.filter(job => storedJobIds.includes(job.bookId))
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
            <h1 className="text-2xl">i am read: {appliedJobs.length}</h1>
            
        </div>
    );
};

export default Read;