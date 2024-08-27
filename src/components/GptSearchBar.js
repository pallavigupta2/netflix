import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/lang";
import { API_OPTIONS } from "../utils/constant";
import { searchMovies } from "../utils/movieSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store.lang.preferedLanguage);
  const searchText = useRef();
  const dispatch = useDispatch();
  const getsearchMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchText.current.value +
        "&include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(searchMovies(json.results));
  };
  const handleSearch = () => {
    getsearchMovies();
  };
  return (
    <div className="pt-[12%] flex justify-center">
      <form
        className="bg-black p-2 grid grid-cols-12 w-1/2 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="border border-black p-2 col-span-9 rounded-md"
          type="text"
          placeholder={lang[language].searchGptPlaceholder}
        />
        <button
          className="bg-red-600 col-span-3 mx-2 rounded-md font-bold"
          onClick={handleSearch}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
