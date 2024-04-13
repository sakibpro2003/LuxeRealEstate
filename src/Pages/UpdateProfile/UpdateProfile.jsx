import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Firebase/AuthProvider";

const UpdateProfile = () => {
  const { user, getUserData,updateUser } = useContext(AuthContext);
  const handleUpdate = (e)=>{
    // e.preventDefault();
    const email= e.target.email.value;
    const name = e.target.fullname.value;
    const photo = e.target.photo.value;
    updateUser(name,photo);
    console.log(email,name,photo)
  }
  console.log(user)
  getUserData();

  return (
    <div className="">
      <div className="">
      <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Photo Url</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>{user.displayName}</td>
        <td>{user.email}</td>
        <td>{user.photoURL}</td>
      </tr>
     
    </tbody>
  </table>
</div>
      </div>
      <div className="hero">
        <div className="hero-content">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="fullName" name="fullname"  className="input input-bordered" />
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
