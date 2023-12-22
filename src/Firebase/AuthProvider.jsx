import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase.config';
export const fireBaseContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password)=>{
        setLoading(true)
 return createUserWithEmailAndPassword(auth,email,password)
    }
    const login = (email,password)=>{
        setLoading(true)
   return signInWithEmailAndPassword(auth,email,password);
    }
    const logout = ()=>{
        setUser(null);
        return signOut(auth);
    }
    const googleLogin = ()=>{
        const provider = new GoogleAuthProvider();
      return  signInWithPopup(auth,provider)
        
    }
    useEffect(()=>{
const observer = onAuthStateChanged(auth,currentUser =>{
    if(currentUser){
        setUser(currentUser);
       
    }
    else{
        setUser(null);
    }
    setLoading(false);
        return ()=> observer();
})
    },[])
  
    return (
        <div>
           <fireBaseContext.Provider value={{user,loading,createUser,login,googleLogin,logout}}>
                 {children}
           </fireBaseContext.Provider>
        </div>
    );
}

export default AuthProvider;
