import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Offers from "../Components/Offers";

const Root= () => {
    return (
        <div>
            
            <div className="max-w-6xl mx-auto font-work_sans"> 
                <Header></Header>
                <Navbar></Navbar>
                <Offers></Offers>           
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;