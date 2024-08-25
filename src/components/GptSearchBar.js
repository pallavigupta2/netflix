import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/lang'

const GptSearchBar = () => {
    const language = useSelector(store=>store.lang.preferedLanguage)
  return (
    <div className='pt-[12%] flex justify-center'>
        <form className='bg-black p-2 grid grid-cols-12 w-1/2 rounded-md'>
            <input className="border border-black p-2 col-span-9 rounded-md" type="text" placeholder={lang[language].searchGptPlaceholder}/>
            <button className='bg-red-600 col-span-3 mx-2 rounded-md font-bold'>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar