import { useContext, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { createUser,logOut } = useContext(AuthContext);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email,data.password)
    .then((result) => {
      logOut()
        console.log(result)
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
                  placeholder="pass"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                  
                />
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

export default Register;
