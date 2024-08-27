import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[17%] px-12 absolute w-full aspect-video bg-gradient-to-r from-black text-white'>
        <h1 className='font-extrabold text-2xl md:text-4xl pb-5'>{title}</h1>
        <p className='hidden md:w-1/4 md:inline-block'>{overview}</p>
        <div className=' py-0 md:py-5'>
            <button className='bg-white py-1 md:py-3 px-3 md:px-6 text-black rounded-md hover:bg-opacity-80 md:mr-2'>▶️ Play</button>
            <button className='bg-gray-500 bg-opacity-40 py-3 px-6 text-white rounded-md hover:bg-opacity-80 hidden md:inline-block'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle