import Image from 'next/image'
// import { Inter } from 'next/font/google'
import { use, useContext } from 'react'
import AppContext from '@/components/Context/AppContext'
import { HeartIcon } from '@heroicons/react/24/solid'
import Hero from '@/components/hero'
import {db, getDocs,colRef,auth, addDoc, doc, deleteDoc, onSnapshot} from "../components/firebase/firebaseConfig"
import { useEffect } from 'react'
import NavBar from '@/components/NavBar'
import Faq from '@/components/FaqSection'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import LinkShortener from '@/components/LinkShortener'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/navigation'

type Movies = {
  title:string,
  director:string,
  id:string,
}


export default function Home() {

  const {user,setUser } = useContext(AppContext);
  const router = useRouter()





  return (
    <main
    className='min-h-screen w-full'
    >
      <NavBar/>
      <Hero/>
      <Features/>
      <Pricing/>
      <LinkShortener/>
      <Faq/>
    </main>
  )
}
