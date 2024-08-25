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
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'

const Browse = () => {
  
  const showGptSearch = useSelector(store=>store.gptSearch.showGptSearch)
 useNowPlayingMovies()
 usePopularMovies()
 useTopRatedMovies()
 useUpcomingMovies()
 useTrendingMovies()
 useTrendingTVShows()
  return (
    <div>
      <Header/>
      {
        showGptSearch ? <GptSearch/> : <><MainContainer/>
      <SecondaryContainer/></>
      }
      
    </div>
  )
}

export default Browse