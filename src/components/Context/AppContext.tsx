import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { AppContextProp } from "@/@types/types";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {app,addDoc,auth,colRef,db,deleteDoc,onSnapshot,doc,getDocs} from "../firebase/firebaseConfig"



const AppContext = createContext<AppContextProp>(null!);

export default AppContext;

export const AppProvider: React.FC<AppContextProp> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({})

const createUser = (email:string,password:string) => {
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setUser(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode,errorMessage)
    // ..
  });
}

const signInUser = (email:string,password:string) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setUser(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode,errorMessage)
  });
}

  const contextData = {
    open,
    setOpen,
    user,
    createUser,
    signInUser
  };



  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
