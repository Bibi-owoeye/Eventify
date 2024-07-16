import React from 'react'
import logo from "../assets/Logo.png"
import    { Link, Outlet } from "react-router-dom";


const Nav = () => {
    const navLink = [
        {
            id: "1",
            name: "Home",
            path:"/home"
        },
        {
            id: "2",
            name: "Event",
            path:"/event"
        },
        {
            id: "3",
            name: "About",
            path:"/about"
        },
        {
            id: "4",
            name: "Contact",
            path:"/home"
        },
    ]
    
  return (
    <>
    <div className='flex justify-between bg-[#2B293D] p-2 text-white '>
        <div >
            <img className='w-[50%] ml-20' src={logo} alt="" />
        </div>
        <div   className='flex gap-5 pt-1 text-lg font-medium pr-12'>
        {navLink.map((link)=>(
            <div key= {link.id}>
                <Link to={link.path}>{link.name}</Link>
            </div>           
        )
        )}
        </div>
        <div className='flex gap-5 pt-1 mr-20 text-lg font-normal'>
            <Link className=' hover:text-[#ffe047]'>Create Event</Link>
                <Link className=' hover:text-[#ffe047]'>Login</Link>
                <Link className='bg-[#ffe047] text-black p-1 w-[80px] text-center h-[40px] font-medium rounded hover:scale-100 hover:bg-[#ffe070]'>Sign Up</Link>
                
        </div>
 
    </div>
    <Outlet/>
    </>
  )
}

export default Nav