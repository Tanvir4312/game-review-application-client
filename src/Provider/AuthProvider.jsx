import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider()
  const [currentTheme, setCurrentTheme] = useState('light')

  const changeTheme = () =>{
    if(currentTheme === 'light'){
      setCurrentTheme('dark')
    }
    else{
      setCurrentTheme('light')
    }
  }


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userUpdate = (updateObj) =>{
    setLoading(true);
    return updateProfile(auth.currentUser, updateObj)
  }

  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = () =>{
    
    return signOut(auth)
  }

  const userLoginWithGoogle = () =>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
// console.log(user);
  const authInfo = {
    user,
    loading,
    createUser,
    userUpdate,
    userLogin,
    userSignOut,
    userLoginWithGoogle,
    changeTheme,
    currentTheme
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
