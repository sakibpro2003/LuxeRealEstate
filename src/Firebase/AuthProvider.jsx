import React, { createContext, useEffect, useState } from 'react';
import {onAuthStateChanged , getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from './firebase.init';
export const AuthContext = createContext(null);

const auth  = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);
    const provider = new GoogleAuthProvider();
    const [name,setName] = useState("");



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
            console.log("profile",profilename)
            setLoading(false);
        });
        return ()=>{
            unsubscribe();
        }
    },[])


    const authInfo = {
        createUser,
        user,
        loginUser,
        logOut,
        loading,
        googleLogin,
        name,
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