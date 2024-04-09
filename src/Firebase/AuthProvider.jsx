import React, { createContext, useEffect, useState, useTransition } from 'react';
import {onAuthStateChanged , getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from './firebase.init';
import toast, { Toaster } from 'react-hot-toast';
export const AuthContext = createContext(null);

const auth  = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const [name,setName] = useState("");
    const [photo,setPhoto] = useState("");




  const createUser = (email,password)=>{
    setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser=(email,password)=>{
    setLoading(true);

        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin=()=>{
       return signInWithPopup(auth, provider)
    }


    const logOut= () =>{
    setLoading(true);

        signOut(auth).then(() => {
            // setUser(null)
          }).catch((error) => {
            // An error happened.
          });
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
            const profilename=(currentUser.displayName)
            setName(profilename);
            // console.log(profilename)
            const profilePhoto=currentUser.photoURL;
            setPhoto(profilePhoto)

            // console.log(photo)

            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[user,photo])


    const authInfo = {
        createUser,
        user,
        loginUser,
        logOut,
        loading,
        googleLogin,
        name,
        photo,
        // notify,
        // setUser,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
                
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;