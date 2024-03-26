import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Job = ({job}) => {

    const {bookId, bookName, image, tags, author, category, rating} = job;
    return (
        <Link
         to={`/job/${bookId}`} className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="" className="rounded-xl max-w-64" />
  </figure>
  <div className="card-body items-start text-center">
    <div className="flex gap-5 ">
        <button className="text-green-500 rounded-lg  bg-green-100">{tags[0]}</button>
        
        <button className="text-green-500  rounded-lg bg-green-100">{tags[1]}</button>
    </div>
    <h1 className="text-2xl font-bold">{bookName}</h1>
    <h5>By : {author}</h5>
    <div className="w-full border-t border-gray-300 border-dashed my-4"></div>
    <div className="flex gap-56">
        
        <h4>{category}</h4>
        
        
            <div className="flex gap-1">
                <h4>{rating}</h4>
            <CiStar />
            </div>
        
    </div>


  </div>
</Link>

        
    );
};

export default Job;