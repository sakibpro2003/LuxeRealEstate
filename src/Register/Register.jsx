import { useContext, useState } from "react";
import { AuthContext } from "../Firebase/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form"
const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  // const [emailError,setEmailError] = useState("");
  const { createUser } = useContext(AuthContext);
  // const pic = "https://i.ibb.co/C2nhDnK/man-7796384-640.jpg";
  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const password = e.target.password.value;
  //   const confirm_password = e.target.confirm_password.value;
  //   const email = e.target.email.value;
  //   const name = e.target.name.value;
  //   // const photo = e.target.photo.value;
  //   const photo = pic;
    
  //   console.log(email, name, photo, password, confirm_password);
    // if (password.length < 6) {
    //   setErrorMessage("Password must be at least 6 characters");
    //   alert(errorMessage);
    //   return ;
    // }
    // else if (password !== confirm_password) {
    //   setErrorMessage("password didnt match");
    //   alert(errorMessage);
    //   return ;
    // }

    // createUser(email, password)
    //   .then((res) => {})
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // const { createUser } = useContext(AuthContext);
//   console.log(creatUser);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email,data.password)
    .then((result) => {
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
      <h3>register</h3>
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
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("fullName", { required: true })}
                />
                {errors.fullName && <span className="bg-red-500">This field is required</span>}
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
                  <span className="label-text">image</span>
                </label>
                <input
                  type="text"
                  placeholder="url"
                  className="input input-bordered"
                  {...register("image")}
                  
                />
                {errors.image && <span>This field is required</span>}
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

export default Register;
