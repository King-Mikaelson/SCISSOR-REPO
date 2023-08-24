import Link from 'next/link'
import React from 'react'


function Faq({}) {
  return (
    <>
          <main className="bg-[url('/smallWavelengthBg.png')] bg-cover bg-center bg-no-repeat h-[18.5rem] w-full mt-20 flex justify-center items-center flex-col gap-10">
        <h4 className="font-sans font-bold text-[2.5rem] text-[#FFF]">
          Revolutionizing Link Optimization
        </h4>

        <div className="text-base bg-[#0065FE] py-[0.65rem] px-10 flex justify-center items-center rounded-full">
          <Link
            className="text-[#FFF] text-base font-sans font-semibold"
            href={"/"}
          >
            Get Started
          </Link>
        </div>
      </main>

    </>
  )
}

export default Faq