import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInForm,setIsSignInForm]=useState(true)
  const handleToggleSignInForm = ()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_small.jpg' alt='back-img'/>
        </div>
          <form className='absolute w-3/12 bg-black mx-auto right-0 left-0 my-36 text-white p-12 bg-opacity-80'>
            <h1 className='text-4xl my-2 font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {
              !isSignInForm && <input type='text' placeholder='Enter Your Name' className='p-3 my-4 bg-gray-800 w-full'/>
            }
            <input type='email' placeholder='Enter Your E-mail' className='p-3 my-4 bg-gray-800 w-full'/>
            <input type='password' placeholder='Enter Your Password' className='p-3 my-4 bg-gray-800 w-full'/>
            <button className='bg-red-700 p-3 w-full'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='my-5'>{isSignInForm ? "New to NetFlix ?" : "Already a User! "} <span className='font-bold cursor-pointer' onClick={handleToggleSignInForm}>{isSignInForm ? "Sign Up" : "Sign Up"} </span> Now.</p>
          </form>
    </div>
  )
}

export default Login