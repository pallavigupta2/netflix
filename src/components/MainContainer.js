import React from 'react'
import VideoTitle from './VideoTitle'
import VedioBackground from './VedioBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector(store=>store.movies.nowPlayingMovies)
    if(!movies) return;
    const backVideo = movies[10]
    const {title,overview,id} = backVideo
    console.log(backVideo)
  return (
    <div className=''>
        <VideoTitle title={title} overview={overview}/>
        <VedioBackground movieId={id}/>
    </div>
  )
}

export default MainContainer