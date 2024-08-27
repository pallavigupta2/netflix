import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND_IMAGE } from '../utils/constant'

const GptSearch = () => {
  return (
    <>
        <div className="fixed -z-10">
        <img
          className='h-screen object-cover md:h-auto md:object-contain'
          src={BACKGROUND_IMAGE}
          alt="back-img"
        />
      </div>
      <div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
        </div>
    </>
  )
}

export default GptSearch