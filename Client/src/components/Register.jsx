import React from 'react'
import img1 from "../assets/Logo.png"
import GoogleIcon from '@mui/icons-material/Google';

const Register = () => {
  return (
    <div className='bg-[#2b293d] w-screen h-screen flex'>
       <div> 
      <img className='w-22 ps-4 pt-4' src={img1} alt="logo"/>
      <div>
        <h2 className='text-[#FFFFFF] text-5xl pl-16 py-20 font-serif'>Discover tailored <br /> events. <br /> Sign up for personalized <br /> recommendations <br />  today</h2>
      </div>
       </div>
       <div className='bg-[#FFFFFF] w-4/4 rounded-l-3xl'>
        <h1 className='w-96 pl-28 text-[#2b293d] font-Montserrat font-bold text-4xl leading-10 pt-16'>Create account</h1>
        <div className='flex'>
          <button className='border border-[#c5c5c5] w-60 ms-28 mt-12 rounded p-3 ps-12'>Sign up with google</button>
          <button className='border border-[#c5c5c5] w-60 ps-12 ms-12 mt-12 rounded p-3'>Sign up with Facebook</button>
        </div>
        <div className="w-64 ms-28 mt-8 border-t-2 border-gray-300 my-4"></div>
       <div>
       <input type="text" className='border ms-28 mt-8 p-2 w-8/12 rounded' placeholder='Enter your full name' />
       <input type="text" className='border ms-28 mt-8 p-2 w-8/12 rounded' placeholder='Enter your e-mail' /> <input type="text" className='border ms-28 mt-8 p-2 w-8/12 rounded' placeholder='Enter your password' />
       </div>
       <button className='border bg-[#2b293d] mt-6 ms-28 w-8/12 p-2 rounded text-[#FFFFFF]'>Create Account</button>

       </div>
    </div>
  )
}

export default Register