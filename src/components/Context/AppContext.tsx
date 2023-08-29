import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { AppContextProp } from "@/@types/types";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {app,addDoc,auth,colRef,db,deleteDoc,onSnapshot,doc,getDocs, userRef} from "../firebase/firebaseConfig"
import { collection } from "firebase/firestore";



const AppContext = createContext<AppContextProp>(null!);

export default AppContext;

export const AppProvider: React.FC<AppContextProp> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({})

const createUser = async(email:string,password:string, username:string) => {
createUserWithEmailAndPassword(auth, email, password)
  .then(async (userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // create User info in firestore

    try {
      const docRef = await addDoc(collection(db, "users"), {
      email: user.email,
      username: username,
      uid: user.uid,
      last_login: Date.now(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    // addDoc(userRef, {
    //   email: user.email,
    //   username: username,
    //   uid: user.uid,
    //   last_login: Date.now(),
    // }).then(docRef => {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    setUser(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode,errorMessage)
    // ..
  });

  
  updateProfile(auth.currentUser!, {
    displayName: username, photoURL: "https://example.com/jane-q-user/profile.jpg"
  }).then((user) => {
    // Profile updated!
    // ...
    console.log(user + "Display name and picture updated")
  }).catch((error) => {
    // An error occurred
    // ...
    console.log(error)
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
    user,
    createUser,
    signInUser,
    open,
    setOpen,
  };



  return (
    <AppContext.Provider value={contextData}>{children}</AppContext.Provider>
  );
};
