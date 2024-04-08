import React, { createContext, useEffect, useState } from 'react';
import {onAuthStateChanged , getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "firebase/auth";
import app from './firebase.init';
export const AuthContext = createContext(null);

const auth  = getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);

  const createUser = (email,password)=>{
    setLoading(true);
   return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser=(email,password)=>{
    setLoading(true);

        return signInWithEmailAndPassword(auth, email, password)
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
        const unsubscribe = onAuthStateChanged(auth, (currenUser) =>{
    // setLoading(true);

            console.log("before set",currenUser);
            setUser(currenUser);
            setLoading(false);
            console.log("afterset",currenUser);

        // setLoading(false);

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