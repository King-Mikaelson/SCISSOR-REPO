/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";import AppContext from "../../components/Context/AppContext";
import { useContext } from "react";
import useTogglePassword from "@/hooks/useTogglePassword";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, auth, db } from "@/components/firebase/firebaseConfig";
import { collection } from "firebase/firestore";
import { useRouter } from "next/navigation";


type Props = {};

function SignUp({}: Props) {
  const {user,setUser, validatingUser, setValidatingUser } = useContext(AppContext);
  const [InputType, ToggleIcon] = useTogglePassword();
  const [InputType1, ToggleIcon1] = useTogglePassword();
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

  const MyInput1 = (props: any) => {
    return (
      <input
        type={InputType1}
        placeholder="Retype Password"
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
    username: Yup.string()
      .required("username is required")
      .min(3, "Username is too short - should be 3 chars minimum"),
    confirmPassword: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
  });

  interface Values {
    email: string;
    password: string;
    username: string;
    confirmPassword: string;
  }

  const initialValues: any = {
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
    
  };


  const handleSubmit = async(values: Values, errors: any) => {
    let { email, password, username, confirmPassword } = values;
    if (password.localeCompare(confirmPassword)) {
      toast.error("Password do not match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in
      const user = userCredential.user;
      // create User info in firestore
      toast.success("Registered User Successfully!");
      setUser(user);
      values.email = "",
      values.password = "",
      values.username = ""  
      values.confirmPassword = ""
      router.push('/login')
      updateProfile(auth.currentUser!, {
        displayName: username,
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      })
        .then((user) => {
          // Profile updated!
          // ...
          console.log(user + "Display name and picture updated");    
        })
        .catch((error) => {
          // An error occurred
          // ...
          console.log(error);
        });

      try {
        const docRef = await addDoc(collection(db, "users"), {
          email: user.email,
          username: username,
          uid: user.uid,
          last_login: Date.now(),
        });
        console.log("Document written with ID: ", docRef.id); 
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      toast.error(errorMessage);
    });

  };

  console.log(user + "user data")

  useEffect(() => {
    if(Object.keys(user).length !== 0)router.push("/")
  },[user])


  if (validatingUser) {
    return <div>Flashhhh</div>
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmit={handleSubmit}
    >
      {(formik: { errors: any; touched: any; isValid: any; dirty: any }) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <main
            className={`flex flex-col px-6 lg:px-16 xl:px-36 pt-10 pb-10 relative  justify-center items-center`}
          >
            <div className="flex flex-col w-full ">
              <h1 className="text-center py-3 text-[#5C6F7F] font-sans font-medium text-sm">
                Sign up with:
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
                <div>
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    className="w-full border-solid border-[#005AE2] border-2 rounded-xl py-3 px-4 font-sans font-medium text-base placeholder:text-[#A0B1C0] placeholder-font-medium placeholder:font-sans placeholder:text-base "
                  />{" "}
                  <ErrorMessage
                    name="username"
                    component="span"
                    className="text-red-700 py-2"
                  />
                </div>

                <div>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full border-solid border-[#005AE2] border-2 rounded-xl py-3 px-4 font-sans font-medium text-base placeholder:text-[#A0B1C0] placeholder-font-medium placeholder:font-sans placeholder:text-base "
                  />{" "}
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="text-red-700 py-2"
                  />
                </div>

                <div className="w-full flex flex-col">
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
                </div>

                <div className="flex flex-col w-full">
                  <div className="w-full flex justify-between relative">
                    <Field
                      name="confirmPassword"
                      placeholder="Retype Password"
                      as={MyInput1}
                    />
                    <div className="absolute top-4 right-4">{ToggleIcon1}</div>
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="span"
                    className="text-red-700 py-2"
                  />
                  <p className="font-sans font-medium text-xs py-3 text-[#A0B1C0]">
                    6 or more characters, one number, one uppercase & one lower
                    case.
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className={`${
                  !(dirty && isValid)
                    ? "w-full px-6 py-4 mt-6 bg-[#005AE2] rounded-[6.25rem] font-sans font-semibold text-sm text-[#FFF] cursor-not-allowed"
                    : "w-full px-6 py-4 mt-6 bg-[#005AE2] rounded-[6.25rem] font-sans font-semibold text-sm text-[#FFF]"
                }`}
                disabled={!(dirty && isValid)}
              >
                Sign up with Email
              </button>

              <p className="text-[#5C6F7F] py-6 pb-4 text-center font-sans font-medium text-sm ">
                Already have an account?{" "}
                <Link href={"/login"} className="text-[#005AE2]">
                  Log In
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

export default SignUp;
