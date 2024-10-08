import React from 'react'
import VideoTitle from './VideoTitle'
import VedioBackground from './VedioBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector(store=>store.movies.nowPlayingMovies)
    if(!movies) return;
    const backVideo = movies[15]
    const {title,overview,id} = backVideo
  return (
    <div className='md:pt-0  bg-black pt-[30%]'>
        <VideoTitle title={title} overview={overview}/>
        <VedioBackground movieId={id}/>
    </div>
  )
}

export default MainContainer