import { Link } from "react-router-dom";


const Buy = () => {
    return (
        <div>
            <div className="container mx-auto text-center mt-10">
      <h1 className="text-3xl font-bold mb-6">Buying Temporarily Closed</h1>
      <p className="text-gray-600 mb-6">We apologize for the inconvenience, but buying is temporarily closed at the moment. Please check back later.</p>
      <img  src="https://i.ibb.co/nBPmbQp/img2.jpg" alt="Temporarily Closed" className="mx-auto mb-6 w-60" />
      <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block hover:bg-blue-600 transition duration-300">Back to Home</Link>
    </div>
        </div>
    );
};

export default Buy;