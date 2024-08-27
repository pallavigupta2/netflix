import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateLoginData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { BACKGROUND_IMAGE } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const dispatch = useDispatch()
  const [error, setError] = useState();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const handleToggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleSubmitForm = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current ? nameRef.current.value : "";;
    const errorMessage = validateLoginData(email, password);
    setError(errorMessage);
    if (errorMessage) return;
    if (!isSignInForm) {
      // SIGNUP CODE
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName }));
            })
            .catch((error) => {
              setError(error.errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    } else {
      // SIGN IN CODE
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
        className='h-screen object-cover md:h-auto md:object-contain'
          src={BACKGROUND_IMAGE}
          alt="back-img"
        />
      </div>
      <form
        className="absolute w-full md:w-3/12 bg-black mx-auto right-0 left-0 my-36 text-white p-12 bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-4xl my-2 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={nameRef}
            type="text"
            placeholder="Enter Your Name"
            className="p-3 my-4 bg-gray-800 w-full"
          />
        )}
        <input
          ref={emailRef}
          type="text"
          placeholder="Enter Your E-mail"
          className="p-3 my-4 bg-gray-800 w-full"
        />
        {error?.emailError && (
          <p className="text-red-600 font-bold">{error?.emailError}</p>
        )}
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter Your Password"
          className="p-3 my-4 bg-gray-800 w-full"
        />
        {(error?.passwordError || error) && (
          <p className="text-red-600 font-bold mb-2">
            {error?.passwordError || error}
          </p>
        )}
        <button className="bg-red-700 p-3 w-full" onClick={handleSubmitForm}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-5">
          {isSignInForm ? "New to NetFlix ?" : "Already a User! "}{" "}
          <span
            className="font-bold cursor-pointer"
            onClick={handleToggleSignInForm}
          >
            {isSignInForm ? "Sign Up" : "Sign In"}{" "}
          </span>{" "}
          Now.
        </p>
      </form>
    </div>
  );
};

export default Login;
