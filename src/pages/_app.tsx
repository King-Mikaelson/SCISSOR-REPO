import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import localFont from "next/font/local";
import { AppProvider } from '@/components/Context/AppContext';
import NavBar from '@/components/NavBar/Navbar';

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
  return (
  <main className={`${gilroy.variable} font-sans`}>
    <AppProvider>
      <NavBar/>
     <Component {...pageProps} />
    </AppProvider>
  </main>
  )
}
