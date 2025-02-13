import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import EstateDetails from "../Pages/EstateDetails/EstateDetails";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import Customer from "../Customer";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,

    children:[
        {
            path:"/",
            element:<Home></Home>,
           loader: ()=>fetch('/data.json')
        },
        {
            path:"/login",
            element: <Login></Login>
        },
        {
            path:"/register",
            element: <Register></Register>
        },
        {
            path:"/details/:id",
            element:<PrivateRoute><EstateDetails/></PrivateRoute>
        },
        {
            path:"/update",
            element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
            path:"/customer",
            element:<PrivateRoute><Customer></Customer></PrivateRoute>
        },
        
    ]
  },
]);

export default router;
