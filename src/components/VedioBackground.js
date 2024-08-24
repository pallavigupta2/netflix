import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VedioBackground = ({movieId}) => {
    useMovieTrailer(movieId)
    const fetchVideo = useSelector(store=>store.movies.trailerVedio)
    console.log("abc",fetchVideo)
    
  return (
    <div className='w-screen'>
        <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/" + fetchVideo?.key+"?&autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
  )
}

export default VedioBackground