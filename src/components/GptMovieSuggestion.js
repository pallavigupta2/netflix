import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
    const showSearchMovies=useSelector(store=>store.movies.searchMovies)
    console.log(showSearchMovies)
    if(!showSearchMovies) return null;
  return (
    <div className='bg-black bg-opacity-80 mt-28 pb-10 pt-3'>
      <div>
      <MovieList movieCategory="Search Result" movies={showSearchMovies}/>
      </div>
    </div>
  )
}

export default GptMovieSuggestion