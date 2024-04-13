import { useContext } from "react";
import { Navigate ,useLocation} from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname)
    // if(loading){
    //     return <h1 className="text-7xl bg-red-500 ">loading</h1>
    // }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;