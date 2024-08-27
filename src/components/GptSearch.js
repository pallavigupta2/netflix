import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BACKGROUND_IMAGE } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
        <div className="fixed -z-10">
        <img
          src={BACKGROUND_IMAGE}
          alt="back-img"
        />
      </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch