import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LANGUAGE_SUPPORTED, NETFLIX_LOGO } from "../utils/constant";
import { toggleGptSearch } from "../utils/gptSearchSlice";
import { languageChange } from "../utils/langSlice";

const Header = () => {
  const userExist = useSelector((store) => store.userAuth);
  const showgptSearchc = useSelector(store=>store.gptSearch.showGptSearch)
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSearchToggle = () => {
    dispatch(toggleGptSearch())
  };
const handleLangChange = (e)=>{
dispatch(languageChange(e.target.value))
}

  return (
    <div className="px-5 py-3 absolute bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-40" src={NETFLIX_LOGO} alt="logo" />
      {userExist && (
        <div className="">
          {showgptSearchc && <select className="bg-red-600 p-1 text-white rounded-md" onChange={handleLangChange}>
            {
              LANGUAGE_SUPPORTED.map((lang)=><option value={lang.identifier} key={lang.identifier}>{lang.name}</option>)
            }
          </select>}
          <button
            className="bg-red-600 px-3 rounded-lg text-white font-semibold m-3 py-1"
            onClick={handleSearchToggle}
          >
            {" "}
            {showgptSearchc ? "Home" : "GPT Search"}
          </button>
          {/* <p className="text-white">{userExist.displayName}</p> */}
          <button
            className="bg-red-600 px-3 m-3 rounded-lg text-white font-semibold py-1"
            onClick={handleLogout}
          >
            LogOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
