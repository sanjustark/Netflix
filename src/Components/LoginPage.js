import React from 'react'
import Header from './Header'
import { useState } from 'react'

const LoginPage = () => {
  const [signin, setsignin] =useState(true)
  const Toggleclick = ()=>{
    if(signin)
      setsignin(false)
    else
      setsignin(true)
  }
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className='absolute'>
      <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg" alt="bgrdimage" />
      </div>
      <form className='absolute w-4/12 p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-lg ' >
        <h1 className='font-bold m-3 p-3'>{signin?"Sign In":"Sign Up"}</h1>
        {!signin &&<input type='text' placeholder='Your Name' className='text-lg p-2 m-2 w-full bg-opacity-30 bg-blue-300 rounded-lg font-medium  '/>}
        <input type='text' placeholder='Email or Phone number' className='text-lg p-2 m-2 w-full bg-opacity-30 bg-blue-300 rounded-lg font-medium  '/>
        <input type='Password' placeholder='Password' className='text-lg p-2 m-2 w-full bg-opacity-30 bg-blue-300 rounded-lg font-medium'/>
        <button className='bg-red-500 w-full p-2 m-2 rounded-lg text-xl cursor-pointer'>{signin?"Sign In":"Sign Up"}</button>
        <p className='p-2 m-2 text-sm cursor-pointer' onClick={Toggleclick}>{signin?"New to Netflix? Sign up now":"Already a member?Sign In"}</p>

      </form>
    </div>
  )
}

export default LoginPage