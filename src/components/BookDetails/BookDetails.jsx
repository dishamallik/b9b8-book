
import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {
    const jobs = useLoaderData();

    

    const {bookId} = useParams();
    const bookIdInt = parseInt(bookId);
    const job = jobs.find(job => job.bookId === bookIdInt);
    console.log(job);
    return (
      <div className="container mx-auto gap-6 mt-10 lg:flex">
        <div>
            <img className="max-w-60" src={job.image} alt="" />
        </div>

        <div>
        <div className="bg-gray-100">
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-2">{job.bookName}</h1>
        <p className="text-gray-600 mb-4">By: {job.author}</p>
        <div className="w-full border-t border-gray-300 border-line my-4"></div>
        <p className="text-gray-700 mb-6">{job.category}</p>

        <div className="w-full border-t border-gray-300 border-line my-4"></div> 


        <div className="mb-4">
            <p className="text-gray-700">Review:</p>
            <p className="text-gray-600">{job.review}</p>
        </div>

        <div className="w-full border-t border-gray-300 border-line my-4"></div>
        <div className="mb-4 flex gap-5">
            <div><p className="text-gray-700">Tags</p></div>
            <div className="">
            <span className="border-2 rounded-lg bg-green-100 ">#{job.tags[0]}</span>
            <span className="border-2 rounded-lg bg-green-100 ml-5">#{job.tags[1]}</span>
            </div>
        </div>
        <div className="mb-4">
            
            <p><span className="font-bold">Number of Pages:</span>    <span className="ml-5">{job.totalPages}</span></p>
            
            <p><span className="font-bold">Publisher:</span>    <span className="ml-20">{job.publisher}</span></p>
            <p><span className="font-bold">Year of Publishing:</span>    <span className="ml-3">{job.yearOfPublishing}</span></p>
            <p><span className="font-bold">Rating:</span>    <span className="ml-24">{job.rating}</span></p>

            
        </div>
        <div className="flex gap-10">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Read</button>
            <button className="bg-green-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">Wishlist</button>
        </div>
    </div>
</div>
             
        </div>
      </div>
    );
};

export default BookDetails;