import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const userExist = useSelector(store=>store.userAuth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="px-5 py-3 absolute bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-48"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
