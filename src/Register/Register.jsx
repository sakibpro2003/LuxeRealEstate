import { useContext, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const notify = () => toast("Registered successfully. Please login");
  const [errorMessage, setErrorMessage] = useState("");
  const { createUser,logOut,updateUser } = useContext(AuthContext);

  
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
  setErrorMessage("");

    console.log("email sakib",data.password,data.cpassword)
    if(data.password !== data.cpassword){
      return setErrorMessage("Password is not matching");
    }
    if(data.password <6 || data.cpassword < 6){
      return setErrorMessage("Password must be at least 6 characters");
    }
  if(!(/.*[A-Z].*/).test(data.password)){
      console.log("uppercase")
      return setErrorMessage("Use an uppercase latter");
    }
  if(!(/.*[a-z].*/).test(data.password)){
      console.log("uppercase")
      return setErrorMessage("Use a lowercase latter");
    }
    createUser(data.email,data.password)
    .then((result) => {
      updateUser(data.fullName,data.image)
      logOut()
        console.log(result)
        notify();
        navigate("/");
      })
  };
  return (
    <div className="">
      <Helmet>
        <title>
          Register
        </title>
      </Helmet>

      <div>
      <div className="hero min-h-screen bg-base-200 rounded-2xl p-10" style={{ backgroundImage: "url('https://i.ibb.co/QDJDysG/view-light-lamp-with-futuristic-design-23-2151037593.jpg')" }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-white font-bold">Register now!</h1>
            <p className="py-6 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                  
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                  
                />
                {errors.password && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Retype your password"
                  className="input input-bordered"
                  {...register("cpassword", { required: true })}
                  
                />
                <div className="text-red-500">{errorMessage}</div>
                {errors.password && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Profile Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="url"
                  className="input input-bordered"
                  {...register("image")}
                  
                />
                {errors.image && <span>This field is required</span>}
                <label className="label">
                  <a href="/login" className="label-text-alt link link-hover">
                    Already Registered? Login
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
                <ToastContainer />

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>


    
  );
};

export default Register;
