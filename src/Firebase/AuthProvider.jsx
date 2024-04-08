import React, { createContext, useState } from 'react';
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebase.init';

const auth  = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState([]);
  const createUser = (email,password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = {
        createUser,
        user,
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