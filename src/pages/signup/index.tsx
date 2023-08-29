/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

function SignUp({}: Props) {
  return (
    <main
      className={`flex flex-col px-6 lg:px-16 xl:px-36 pt-10 pb-10 relative  justify-center items-center`}
    >
      <div className="flex flex-col w-full ">
        <h1 className="text-center py-3 text-[#5C6F7F] font-sans font-medium text-sm">Sign up with:</h1>
        <div className="flex gap-5 justify-center">
          <button className="flex items-center bg-[#005AE2] px-5 py-2 rounded-[0.1875rem] gap-1 text-white font-medium text-base font-sans">
            <Image src="/googleLogo.svg" alt="google" width={100} height={100} className="w-5 h-4" />
            <p>Google</p>
          </button>
          <button className="flex items-center bg-[#005AE2] px-5 py-2 rounded-[0.1875rem] gap-1 text-white font-medium text-base font-sans">
            <Image src="/appleLogo.svg" alt="facebook" width={100} height={100} className="w-5 h-4" />
            <p>Apple</p>
          </button>
        </div>
        <div className="relative flex py-5 items-center justify-center lg:w-[40%] w-full my-0 mx-auto">
            <div className="flex-grow border-t border-[#A0B1C0]"></div>
            <span className="flex-shrink mx-4 text-[#5C6F7F] font-sans text-base font-medium">
             Or
            </span>
            <div className="flex-grow border-t border-[#A0B1C0]"></div>
        </div>
      </div>
      <form className="flex flex-col lg:w-[40%] w-full">
      <div className="w-full flex flex-col gap-6">

      <div>
        <input type="text" placeholder="Username" className="w-full border-solid border-[#005AE2] border-2 rounded-xl py-3 px-4 font-sans font-medium text-base placeholder:text-[#A0B1C0] placeholder-font-medium placeholder:font-sans placeholder:text-base " />
      </div>

      <div>
        <input type="text" placeholder="Email" className="w-full border-solid border-[#005AE2] border-2 rounded-xl py-3 px-4 font-sans font-medium text-base placeholder:text-[#A0B1C0] placeholder:font-medium placeholder:font-sans placeholder:text-base" />
      </div>

      <div>
        <input type="text" placeholder="Password" className="w-full border-solid border-[#005AE2] border-2 rounded-xl py-3 px-4 font-sans font-medium text-base placeholder:text-[#A0B1C0]placeholder:font-medium placeholder:font-sans placeholder:text-base" />
      </div>

      <div>
        <input type="text" placeholder="Retype Password" className="w-full border-solid border-[#005AE2] border-2 rounded-xl py-3 px-4 font-sans font-medium text-base placeholder:text-[#A0B1C0] placeholder:font-medium placeholder:font-sans placeholder:text-base" />
      
        <p className="font-sans font-medium text-xs py-3 text-[#A0B1C0]">6 or more characters, one number, one uppercase & one lower case.</p>
      </div>
      </div>

      <button className="w-full px-6 py-4 mt-6 bg-[#005AE2] rounded-[6.25rem] font-sans font-semibold text-sm text-[#FFF]">
      Sign up with Email
      </button>

      <p className="text-[#5C6F7F] py-6 pb-4 text-center font-sans font-medium text-sm ">Already have an account? <Link href={"/login"} className="text-[#005AE2]">Log In</Link></p>

      <p className="text-[#A0B1C0]  font-sans font-medium text-xs  text-center ">By signing up, you agree to Sciccor's <span className="text-[#5C6F7F]"><br/>Terms of Service, Privacy Policy</span> and <span className="text-[#5C6F7F]">Acceptable Use Policy.</span></p>

      </form>
    </main>
  );
}

export default SignUp;
