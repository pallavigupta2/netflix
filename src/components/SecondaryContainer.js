import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (
    <div className='bg-black'>
      <div className='pl-12 -mt-52 relative'>
      <MovieList movieCategory="Now Playing Movie" movies={movies.nowPlayingMovies}/>
      <MovieList movieCategory="Trending Movie" movies={movies.trendingMovies}/>
      <MovieList movieCategory="Popular Movie" movies={movies.popularMovies}/>
      <MovieList movieCategory="Top Rated Movie" movies={movies.topRatedMovies}/>
      <MovieList movieCategory="Upcoming Movie" movies={movies.upcomingMovies}/>
      <MovieList movieCategory="TrendingTV Shows" movies={movies.trendingShows}/>
      </div>
    </div>
  )
}

export default SecondaryContainer