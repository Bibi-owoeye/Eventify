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
       <div className='bg-[#FFFFFF] w-1/2 ml-16 rounded-l-3xl'>
        <h1 className='w-96 pl-16 text-[#2b293d] font-extrabold text-3xl pt-16'>Create account</h1>
        <div>
        <svg data-testid="GoogleIcon">GoogleIcon</svg>
        </div>
       </div>
    </div>
  )
}

export default Register