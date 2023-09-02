/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useTogglePassword from "@/hooks/useTogglePassword";
import AppContext from "@/components/Context/AppContext";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify"
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/components/firebase/firebaseConfig";
import { useRouter } from "next/navigation";


type Props = {};

function Login({}: Props) {
  const { user, setUser, validatingUser, setValidatingUser } = useContext(AppContext);
  const [InputType, ToggleIcon] = useTogglePassword();
  const router = useRouter()



  const MyInput = (props: any) => {
    return (
      <input
        type={InputType}
        placeholder="Enter password"
        className="w-full border-solid border-[#005AE2] border-2 rounded-xl py-3 px-4 font-sans font-medium text-base placeholder:text-[#A0B1C0]placeholder:font-medium placeholder:font-sans placeholder:text-base flex justify-between"
        {...props}
      />
    );
  };

  const SignInSchema = Yup.object().shape({
    email: Yup.string().email().required("*email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
  });

  interface Values {
    email: string;
    password: string;
  }

  const initialValues: any = {
    email: "",
    password: "",
  };


  const handleSubmit = async (values: Values, errors: any) => {
    let { email, password } = values;
    console.log(errors.restForm)

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        toast.success("Signed In User Successfully!");
        password = "",
        email = ""
        router.push('/')

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        toast.error(errorMessage);
        toast.error("Registration failed:");
      });
  };

  console.log(user)

  useEffect(() => {
    if(Object.keys(user).length !== 0) router.push("/")
  },[user])

  if (validatingUser) {
    return <div>Flashhhh</div>;
}

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={handleSubmit}
    >
      {(formik: { errors: any; touched: any; isValid: any; dirty: any }) => {
        const {
          errors,
          touched,
          isValid,
          dirty} = formik;
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
            <Form className="flex flex-col lg:w-[40%] w-full">
              <div className="w-full flex flex-col gap-6">
                <div className="w-full">
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address or username"
                    className="w-full border-solid border-[#005AE2] border-2 rounded-xl py-3 px-4 font-sans font-medium text-base placeholder:text-[#A0B1C0] placeholder-font-medium placeholder:font-sans placeholder:text-base "
                  />{" "}
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="text-red-700 py-2"
                  />
                </div>

                <div className="flex flex-col w-full">
                  <div className="w-full flex justify-between relative">
                    <Field
                      name="password"
                      placeholder="Enter password"
                      as={MyInput}
                    />
                    <div className="absolute top-4 right-4">{ToggleIcon}</div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="text-red-700 py-2"
                  />
                  <p className="font-sans font-medium text-sm text-right py-3 text-[#4991FF]">
                    Forgot your password?.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className={`${!(dirty && isValid) ? "w-full px-6 py-4 mt-2 bg-[#005AE2] rounded-[6.25rem] font-sans font-semibold text-sm text-[#FFF] cursor-not-allowed" : "w-full px-6 py-4 mt-2 bg-[#005AE2] rounded-[6.25rem] font-sans font-semibold text-sm text-[#FFF] cursor-pointer"}`}
                disabled={!(dirty && isValid)}
              >
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
                and{" "}
                <span className="text-[#5C6F7F]">Acceptable Use Policy.</span>
              </p>
            </Form>
          </main>
        );
      }}
    </Formik>
  );
}

export default Login;
