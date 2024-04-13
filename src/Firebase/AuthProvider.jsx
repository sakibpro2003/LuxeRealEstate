import React, {
  createContext,
  useEffect,
  useState,
  useTransition,
} from "react";
import {
  onAuthStateChanged,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import app from "./firebase.init";
import toast, { Toaster } from "react-hot-toast";
export const AuthContext = createContext(null);
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const notify = () => toast("Wow so easy!");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    notify();

    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (fullName, image) => {
    return updateProfile(auth.currentUser, {
      displayName: fullName,
      photoURL: image,
    });
  };

 

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    setLoading(true);

    signOut(auth)
      .then(() => {
        // setUser(null)
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const profilename = currentUser.displayName;
      setName(profilename);
      // console.log(profilename)
      const profilePhoto = currentUser.photoURL;
      setPhoto(profilePhoto);

      // console.log(photo)

      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [user, photo]);

  const getUserData = () => {
    if (user !== null) {
      // The user object has basic properties such as display name, email, etc.
      const displayName = user.displayName;
      const email = user.email;
      const photoURL = user.photoURL;
      console.log(displayName,email,photoURL)
      // const emailVerified = user.emailVerified;
    
      // The user's ID, unique to the Firebase project. Do NOT use
      // this value to authenticate with your backend server, if
      // you have one. Use User.getToken() instead.
      // const uid = user.uid;
    }
  };

  const authInfo = {
    createUser,
    user,
    loginUser,
    logOut,
    loading,
    googleLogin,
    name,
    photo,
    updateUser,
    getUserData
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
