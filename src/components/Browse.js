import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/UsePolularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTrendingMovies from '../hooks/useTrendingMovies'
import useTrendingTVShows from '../hooks/useTrendingTVShows'

const Browse = () => {
 useNowPlayingMovies()
 usePopularMovies()
 useTopRatedMovies()
 useUpcomingMovies()
 useTrendingMovies()
 useTrendingTVShows()
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse