import '@/styles/globals.scss'
import type { AppProps } from 'next/app';
import localFont from "next/font/local";
import { AppProvider } from '@/components/Context/AppContext';
import Footer from '@/components/footer';
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from "firebase/auth";
import {
  auth,
} from "../components/firebase/firebaseConfig";


const gilroy = localFont({
  src:[
    {
      path:"../../public/font/Gilroy/Gilroy-Medium.ttf",
      weight:'500'
    },
    {
      path:"../../public/font/Gilroy/Gilroy-Semibold.ttf",
      weight:'600'
    },
    {
      path:"../../public/font/Gilroy/Gilroy-Bold.ttf",
      weight:'700'
    },
  ],
  variable:"--font-gilroy"
})

export default function App({ Component, pageProps }: AppProps) {
  if (!process.browser) React.useLayoutEffect = React.useEffect;


  return (
  <main className={`${gilroy.variable} font-sans`}>
    <ToastContainer/>
    <AppProvider user={{}} setUser={function (value: React.SetStateAction<{}>): void {
        throw new Error('Function not implemented.');
      } } validatingUser={false} setValidatingUser={function (value: React.SetStateAction<boolean>): void {
        throw new Error('Function not implemented.');
      } }>
     <Component {...pageProps} />
     <Footer/>
    </AppProvider>
  </main>
  )
}
