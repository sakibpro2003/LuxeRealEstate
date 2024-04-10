import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";

const Navbar = () => {
  const { user, logOut, name,photo} = useContext(AuthContext);
  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="navbar bg-base-100 mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {/* <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/listed_books">Listed Books</NavLink></li>
        <li><NavLink to="/pages_to_read">Pages to Read</NavLink></li> */}
          </ul>
        </div>
        <a to="/" className="btn btn-ghost text-xl">LuxeRealEstate</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
          <li>
            <NavLink to="/customer">Happy Customer</NavLink>
          </li>
          {user ? (
            <p className="text-transparent">h</p>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          {user ? (
            <li>
            <NavLink to="/update">Update Profile</NavLink>
          </li>
          ) : (
            
            <p className="text-transparent">h</p>
          )}
          
        </ul>
      </div>

      {user ? (
        <div className="navbar-end">
          <div
            className="avatar hover:tooltip tooltip-open tooltip-left"
            data-tip={name}
          >
            <div className="w-12 rounded-full">
              <img src={photo} />
            </div>
          </div>
          <NavLink onClick={handleLogout} className="btn">
            Logout
          </NavLink>
        </div>
      ) : (
        <li>{/* <NavLink to="/login">Login</NavLink> */}</li>
      )}
    </div>
  );
};

export default Navbar;
