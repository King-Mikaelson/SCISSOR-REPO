// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc, onSnapshot } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA97jOxR1fhzjK3Xclja5OCdVagp_ny6uc",
  authDomain: "bitly-500dc.firebaseapp.com",
  projectId: "bitly-500dc",
  storageBucket: "bitly-500dc.appspot.com",
  messagingSenderId: "476114611095",
  appId: "1:476114611095:web:3d63d95fddc25cc1ee32d2",
  measurementId: "G-8B3WPDQJFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Collections
const colRef = collection(db, "movies");

// Get all documents from the collection - "movies"
// getDocs(colRef)
// .then((snapshot) => {
//   let movies:any = []
//   snapshot.forEach((doc) =>{
//     movies.push({...doc.data(), id:doc.id})
//   })
//   console.log(movies)
// })
// .catch((err) => console.log(err))



// addDoc(colRef, {
//     title: "Harry Potter and the Philosopher's Stone",
//     director: "Chris Columbus",
// }).then(docRef => {
//     console.log("Document written with ID: ", docRef.id);
// })

export { app, auth, db, colRef, getDocs, addDoc, doc, deleteDoc, onSnapshot };