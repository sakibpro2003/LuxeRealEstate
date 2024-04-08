import { useContext } from "react";
import { Navigate ,useLocation} from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    // const navigate = useNavigate();
    if(loading){
        return (<div className="mt-56 ml-56"><span className="loading loading-spinner text-error"></span></div>)
    }
    if(user){
        return {children}
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;