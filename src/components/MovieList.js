import React from "react";
import MovieCard from "./MovieCard";
import "../App.css"

const MovieList = ({ movieCategory, movies }) => {
  return (
    <div>
      <h1 className="text-white text-3xl py-3">{movieCategory}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
        {movies?.map((movie) => (
          <MovieCard moviePoster={movie.poster_path} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default MovieList;
