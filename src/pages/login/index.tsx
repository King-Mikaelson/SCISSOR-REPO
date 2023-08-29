/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useTogglePassword from "@/hooks/useTogglePassword";
import AppContext from "@/components/Context/AppContext";

type Props = {};

function Login({}: Props) {
  const {user,signInUser} = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [InputType, ToggleIcon] = useTogglePassword();
  const[passwordError, setPasswordError]=useState("");
  const[emailError, setEmailError]=useState("")


     // Regex for name,email and phone Validation
     const passwordRegex = /[a-zA-Z0-9]/;
     const usernameRegex = /[a-zA-Z0-9]/;
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   
     // Function that validates the input
     const validate = () => {
       if (
         passwordRegex.test(password!.trim()) === false &&
         password?.trim().length === 0
       ) {
         setPasswordError('*Password can not be blank');
       } else if (
         passwordRegex.test(password!.trim()) === false &&
         password!.trim().length > 0
       ) {
         setPasswordError('*Password must contain at least one letter or number');
       } else if (
         passwordRegex.test(password!.trim()) &&
         password!.trim().length < 4
       ) {
         setPasswordError('*Password must contain at least four characters');
       } else {
         setPasswordError('');
       }
  
   
       if (
       emailRegex.test(email!.trim()) === false &&
       email!.trim().length === 0
     ) {
       setEmailError('*Email can not be blank');
     } else if (emailRegex.test(email.trim()) === false) {
       console.log('wrong');
       setEmailError('*Invalid Email');
     } else {
       setEmailError('');
     }
     };
   
   
   
   
       const handleLogin = async (email: string, password: string) => {
       try {
         // Registration successful, do something here (e.g., redirect, show success message)
         const result = await signInUser(email, password)
       } catch (error) {
         // Handle registration error here
         console.error('Registration failed:', error);
       }
     };

     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      validate()
      if (emailError === ''  && passwordError === '' && email && password ) {
        handleLogin(email, password,);
      } else {
        console.log('failed');
      }
    }
    
    console.log(emailError, passwordError)
    console.log(user)
    
    useEffect(() =>{
      validate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[email,password])
  
    // OnFocus code  is to remove the error warnings and red borders when the user clicks the input again
    const handlePasswordFocus = () => {
      setPasswordError('');
    };
  
    const handleEmailFocus = () => {
      setEmailError('');
    };
  return (
    <main
      className={`flex flex-col px-6 lg:px-16 xl:px-36 pt-24 lg:pb-36 relative  justify-center items-center`}
    >
      <div className="flex flex-col w-full ">
        <h1 className="text-center py-3 text-[#5C6F7F] font-sans font-medium text-sm">
          Log in with:
        </h1>
        <div className="flex gap-5 justify-center">
          <button className="flex items-center bg-[#005AE2] px-5 py-2 rounded-[0.1875rem] gap-1 text-white font-medium text-base font-sans">
            <Image
              src="/googleLogo.svg"
              alt="google"
              width={100}
              height={100}
              className="w-5 h-4"
            />
            <p>Google</p>
          </button>
          <button className="flex items-center bg-[#005AE2] px-5 py-2 rounded-[0.1875rem] gap-1 text-white font-medium text-base font-sans">
            <Image
              src="/appleLogo.svg"
              alt="facebook"
              width={100}
              height={100}
              className="w-5 h-4"
            />
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
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col lg:w-[40%] w-full">
        <div className="w-full flex flex-col gap-6">
          <div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={handleEmailFocus}
              type="text"
              placeholder="Email address or username"
              className="w-full border-solid border-[#005AE2] border-2 rounded-xl py-3 px-4 font-sans font-medium text-base placeholder:text-[#A0B1C0] placeholder-font-medium placeholder:font-sans placeholder:text-base "
            />
            {emailError ?  <p className="py-2 text-red-700">{emailError}</p> : ""}
          </div>

          <div className="flex flex-col w-full">
          <div className="w-full flex justify-between relative">
                  <input
                    type={String(InputType)}
                    placeholder="Enter password"
                    value={password}
                    onFocus={handlePasswordFocus}
                    className="w-full border-solid border-[#005AE2] border-2 rounded-xl py-3 px-4 font-sans font-medium text-base placeholder:text-[#A0B1C0]placeholder:font-medium placeholder:font-sans placeholder:text-base flex justify-between"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="absolute top-4 right-4">{ToggleIcon}</div>
              </div>
              {passwordError ?  <p className="py-2 text-red-700">{passwordError}</p> : ""}
            <p className="font-sans font-medium text-sm text-right py-3 text-[#4991FF]">
              Forgot your password?.
            </p>
          </div>
        </div>

        <button className="w-full px-6 py-4 mt-2 bg-[#005AE2] rounded-[6.25rem] font-sans font-semibold text-sm text-[#FFF]">
          Log in
        </button>

        <p className="text-[#5C6F7F] py-6 pb-3 text-center font-sans font-medium text-sm ">
          Don’t have an account?{" "}
          <Link href={"/signup"} className="text-[#005AE2]">
            Sign up
          </Link>
        </p>

        <p className="text-[#A0B1C0]  font-sans font-medium text-xs  text-center ">
          By signing up, you agree to Sciccor's{" "}
          <span className="text-[#5C6F7F]">
            <br />
            Terms of Service, Privacy Policy
          </span>{" "}
          and <span className="text-[#5C6F7F]">Acceptable Use Policy.</span>
        </p>
      </form>
    </main>
  );
}

export default Login;
