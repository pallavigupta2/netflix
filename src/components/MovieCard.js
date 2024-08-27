import React from 'react'
import { CDN_IMAGE_URL } from '../utils/constant'

const MovieCard = ({moviePoster}) => {
  if(!moviePoster) return null
  return (
    <div className="w-36 rounded-md mx-2">
        <img className="rounded-md" alt='movie-img' src={CDN_IMAGE_URL+moviePoster}/>
    </div>
  )
}

export default MovieCard