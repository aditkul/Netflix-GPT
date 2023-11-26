import React, { useState } from 'react'
import Header from './Header';

const Login = () => {
  const [isSignIn , setIsSignIn] = useState(true);
  const toggleSignUp = () =>{
    setIsSignIn(!isSignIn)
  }
  return (
    <div>
      <Header/>
      
      <div className='absolute'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
        {!isSignIn && (
          <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' />
        )}
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800' />
        <input type="text" placeholder='password' className='p-4 my-4 w-full bg-gray-800' />
        <button className='p-4 my-6 bg-red-700 w-full '>Sign in</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignUp}>{isSignIn ? "New to Netflix? Sign Up Now" : "Already Registered?Sign In"}</p>
      </form>
      </div>
  )
}; 

export default Login;