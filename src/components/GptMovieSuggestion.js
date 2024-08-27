import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {
    const showSearchMovies=useSelector(store=>store.movies.searchMovies)
    console.log(showSearchMovies)
    if(!showSearchMovies) return null;
  return (
    <div className='bg-black bg-opacity-80 mt-40 pb-10 pt-3 px-2 mx-2'>
      <div>
      <MovieList movieCategory="Search Result" movies={showSearchMovies}/>
      </div>
    </div>
  )
}

export default GptMovieSuggestion