import Image from 'next/image'
// import { Inter } from 'next/font/google'
import { use, useContext } from 'react'
import AppContext from '@/components/Context/AppContext'
import { HeartIcon } from '@heroicons/react/24/solid'
import Hero from '@/components/hero'
import {db, getDocs,colRef,auth, addDoc, doc, deleteDoc, onSnapshot} from "../components/firebase/firebaseConfig"
import { useEffect } from 'react'
import NavBar from '@/components/NavBar'

type Movies = {
  title:string,
  director:string,
  id:string,
}


export default function Home() {
// useEffect(() => {
//   // getDocs(colRef)
//   // .then((snapshot) => {
//   //   let movies:any = []
//   //   snapshot.forEach((doc) =>{
//   //     movies.push({...doc.data(), id:doc.id})
//   //   })
//   //   console.log(movies)
//   // })
//   // .catch((err) => console.log(err))

//   // Get all documents from the collection in real time - "movies"
// onSnapshot(colRef, (snapshot) => {
//   let movies:any = []
// snapshot.forEach((doc) =>{
//   movies.push({...doc.data(), id:doc.id})
// })
// console.log(movies)
// })
  
  
//   addDoc(colRef, {
//       title: "The Alchemist",
//       director: "John Doe",
//   }).then(docRef => {
//       console.log("Document written with ID: ", docRef.id);
//   })

//   let deleteRef = doc(db, "movies", 'dwRUtkJyumZsrkv1O5sB')

//   deleteDoc(deleteRef)
//   .then((doc) => {
//     console.log("Document successfully deleted!", doc);
//   })
// },[]) 
  return (
    <main
    className='bg-[#fcfbfa] min-h-screen w-full'
    >
      <NavBar/>
      <Hero/>
    </main>
  )
}
