import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";



const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            
            <Books></Books>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;