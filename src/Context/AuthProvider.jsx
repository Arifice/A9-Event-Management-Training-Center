/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext=createContext(null);
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true);

    const [user,setUser]=useState(null);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const login=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
   
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    const authInfo={
        user,
        createUser,
        login,
        logOut,
        loading,
    };
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('user in the onAuthStateChange',currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return ()=>{
            unSubscribe();

        }
    },[])
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;