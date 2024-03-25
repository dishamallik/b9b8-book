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
            <h1 className="text-4xl font-bold">Books: {cards.length}</h1>
        </div>
       

       <div>
       {
            cards.map(job => <Job key={job.id} job={job}></Job>)
        }

       </div>
       </div>
    );
};

export default Books;