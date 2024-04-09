import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";



const Root = () => {
    return (
        <div className="w-5/6 mx-auto">
          <Navbar></Navbar>
          <Outlet></Outlet>  
          <Footer></Footer>
        </div>
    );
};

export default Root;