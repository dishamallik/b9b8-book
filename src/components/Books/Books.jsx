import { useEffect, useState } from "react";

import Job from "../Job/Job";


const Books = () => {


const [cards, setCard] = useState([]);


useEffect( () =>{
    fetch('Book.json')
    .then(res => res.json())
    .then(data => setCard(data));
}, [])





    return (
       <div>
         <div className="text-center mt-20">
            <h1 className="text-4xl font-bold">Books</h1>
        </div>
       

       <div className="container mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-5">
       {
            cards.map(job => <Job key={job.bookId} job={job}></Job>)
        }

       </div>
       </div>
    );
};

export default Books;