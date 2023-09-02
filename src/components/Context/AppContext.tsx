import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { AppContextProp } from "@/@types/types";
import {
  onAuthStateChanged,
} from "firebase/auth";
import {

  auth,
} from "../firebase/firebaseConfig";
import { collection } from "firebase/firestore";
import { toast } from "react-toastify";

const AppContext = createContext<AppContextProp>(null!);

export default AppContext;

export const AppProvider: React.FC<AppContextProp> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});
  const [validatingUser, setValidatingUser] = useState(true);


  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUser(user)
       
      } else {
        // User is signed out
        // ...
        setUser({})
      }
      setValidatingUser(false)

    });
  },[])


  const contextData = {
    user,
    open,
    setOpen,
    setUser,
    validatingUser,
     setValidatingUser
  };

  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
