import '@/styles/globals.scss'
import type { AppProps } from 'next/app';
import localFont from "next/font/local";
import { AppProvider } from '@/components/Context/AppContext';
import Footer from '@/components/footer';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
    <AppProvider createUser={function (email: string, password: string, username: string): void {
        throw new Error('Function not implemented.');
      } } signInUser={function (email: string, password: string): void {
        throw new Error('Function not implemented.');
      } } user={undefined}>
     <Component {...pageProps} />
     <Footer/>
    </AppProvider>
  </main>
  )
}
