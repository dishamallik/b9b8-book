import { Link } from "react-router-dom";



const Error = () => {
    return (
        <div className=" text-black text-center mt-20">
            
            <h1 className="font-bold text-6xl">404 
                <br />
                Error Page !
            </h1>
            <Link to="/home" className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block hover:bg-blue-600 transition duration-300 mt-10">Back to Home</Link>
        </div>
    );
};

export default Error;