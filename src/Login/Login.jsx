import { useContext, useState } from "react";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../Firebase/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"


const Login = () => {
  const { loginUser, googleLogin } = useContext(AuthContext);
  const handleGoogleLogin = async () => {
    googleLogin().then((result) => {
      // console.log("googlelogin",result.user)
    });
    
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   loginUser(email, password)
  //     .then((res) => {
  //       // setUserLogged(res.user);
  //       // console.log(res.user);
  //     })
  //     .catch((error) => {
  //       alert(error.message)
  //     });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginUser(data.email,data.password)
    .then((result) => {
        console.log(result)
      })
};
  return (
    <div>
      <Helmet>
        <title>
          Login
        </title>
      </Helmet>
      <div>
      {/* <h3>Login</h3> */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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
                {errors.email && <span className="bg-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">pass</span>
                </label>
                <input
                  type="password"
                  placeholder="pass"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                  
                />
                {errors.password && <span className="bg-red-500">This field is required</span>}
              </div>
              <div className="form-control">
               
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
