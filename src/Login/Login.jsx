import { useContext, useState } from "react";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../Firebase/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [success, setSuccess] = useState(null);
  const notify = () => toast();
  const { loginUser, googleLogin,githubLogin } = useContext(AuthContext);
  const [passwordVisible, setPasswordVisible] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };
  const handleGoogleLogin = async () => {
    googleLogin().then((result) => {
      navigate(location?.state ? location.state : "/");
    });
  };

  const handleGithubLogin=()=>{
    githubLogin().then(result=> console.log(result))
    navigate(location?.state ? location.state : "/");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setSuccess(notify());

    loginUser(data.email, data.password)
      .then((result) => {
        console.log(result);

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const notify = () => toast(error.message);
        console.log(error.message);
        notify();
      });
  };
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div>
        {/* <h3>Login</h3> */}
        <div
          className="hero min-h-screen bg-base-200 rounded-2xl"
          style={{
            backgroundImage:
              "url('https://i.ibb.co/QDJDysG/view-light-lamp-with-futuristic-design-23-2151037593.jpg')",
          }}
        >
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl text-white font-bold">Login now!</h1>
              <p className="py-6 text-white">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    placeholder="pass"
                    className="input input-bordered"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <a
                      href="/register"
                      className="label-text-alt link link-hover"
                    >
                      Not Registered yet? Register
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                  <ToastContainer />
                </div>
                <button
                  type="button"
                  className="absolute inset-y-0 right-6 px-4 py-0"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
              </form>

              <div className="flex ">
                <button
                  onClick={handleGoogleLogin}
                  className="flex-grow btn btn-outline btn-success"
                >
                  Google Login
                </button>
                {/* <ToastContainer /> */}

                <button onClick={handleGithubLogin} className="btn btn-outline btn-warning flex-grow">
                  github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
