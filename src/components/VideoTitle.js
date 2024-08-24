import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] px-12 absolute w-screen aspect-video bg-gradient-to-r from-black text-white'>
        <h1 className='font-extrabold text-4xl pb-5'>{title}</h1>
        <p className='w-[30%]'>{overview}</p>
        <div className='py-5'>
            <button className='bg-white py-3 px-6 text-black rounded-md hover:bg-opacity-80 mr-2'>▶️ Play</button>
            <button className='bg-gray-500 bg-opacity-40 py-3 px-6 text-white rounded-md hover:bg-opacity-80'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle