import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Firebase/AuthProvider";

const UpdateProfile = () => {
  const { user, getUserData, updateUser } = useContext(AuthContext);
  const [updateError,setUpdateError] = useState(null);
  const handleUpdate = (e) => {
    // e.preventDefault();
    // const email = e.target.email.value;
    const fullName = e.target.fullname.value;
    const image = e.target.photo.value;
    if(fullName === ""){
      setUpdateError("name can not be empty")
      return;
    }
    if(image===""){
      setUpdateError("image URL cant be empty")
      return ;
    }
    updateUser(fullName, image);
    console.log( fullName, image);
  };
  console.log(user);
  getUserData();

  return (
    <div className="">
      <div className="">
        <div className="overflow-x-auto">
          <h2 className="text-center text-4xl">Your Current Profile Details</h2>
          <table className="table table-zebra  bg-gray-600 text-white">
            {/* head */}
            <thead className="text-white text-center text-xl">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Photo Url</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="font-bold">
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.photoURL}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h3 className="text-center font-bold text-4xl mt-10">Edit to Update</h3>
      <div className="hero">
        <div className="hero-content">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="fullName"
                  name="fullname"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  className="input input-bordered"
                />
              </div>
              <div className="text-red-500">{updateError}</div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
