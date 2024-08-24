import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { NETFLIX_LOGO } from "../utils/constant";

const Header = () => {
  const userExist = useSelector(store=>store.userAuth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        //dispatch(removeUser());
        //navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

useEffect(()=>{
     const unsubscribe =   onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName} = user;
                dispatch(addUser({uid,email,displayName}))
                navigate("/browse")
            } else {
              // User is signed out
              dispatch(removeUser())
              navigate("/")
            }
          });
          return ()=>unsubscribe();
    },[])

  return (
    <div className="px-5 py-3 absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-48"
        src={NETFLIX_LOGO}
        alt="logo"
      />
      {userExist && <div>
        <p className="text-white">{userExist.displayName}</p>
        <button
          className="bg-red-600 px-3 py-1 rounded-sm text-white font-semibold border border-white"
          onClick={handleLogout}
        >
          LogOut
        </button>
      </div>}
    </div>
  );
};

export default Header;
