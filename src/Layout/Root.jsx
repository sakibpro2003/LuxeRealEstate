import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";



const Root = () => {
    return (
        <div className="w-11/12 mx-auto">
          <Outlet></Outlet>  
          <Footer></Footer>
        </div>
    );
};

export default Root;