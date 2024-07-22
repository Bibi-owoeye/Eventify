import React from "react";
import logo from "../assets/Logo.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import ticket from "../assets/icons8-ticket-50.png";
import star from "../assets/icons8-star-50.png";
import Home from "./Home";

const Nav = () => {

    const navigate = useNavigate()
  const navLink = [
    {
      id: "1",
      name: "Home",
      path: "/",
    },
    {
      id: "2",
      name: "Event",
      path: "/event",
    },
    {
      id: "3",
      name: "About",
      path: "/about",
    },
    {
      id: "4",
      name: "Contact",
      path: "/home",
    },
  ];

  return (
    <>
      <div className="flex justify-between bg-[#2B293D] p-2 text-white ">
        <div>
          <img className="w-[50%] ml-20" src={logo} alt="" onClick={() =>navigate('/')}/>
        </div>
        <div className="flex gap-5 pt-1 text-lg font-medium pr-12">
          {navLink.map((link) => (
            <div key={link.id}>
              <Link to={link.path}>{link.name}</Link>
            </div>
          ))}
        </div>
        <div className="flex gap-5 pt-1 mr-20 text-lg font-normal">
          <Link className=" hover:text-[#ffe047]" to='/nav2/createevent'>Create Event</Link>
          <Link className=" hover:text-[#ffe047]">
            <img src={ticket} className="w-6 ml-2" alt="" />
            <p className="text-sm">Tickets</p>
          </Link>
          <Link className=" hover:text-[#ffe047]">
            <img src={star} alt="" className="w-6 ml-3 " />
            <p className="text-sm">Interested</p>
          </Link>
          <div>
            <img src="" alt="" />
          <ul className="">
            <li className="group relative">
              <p className=" focus:outline-none">Profile</p>
              <div className="absolute left-0 top-[45px] opacity-0 hidden group-hover:block w-48 mt-2 opacity-100 bg-white text-black shadow-lg rounded-lg z-10">
                <Link to='/nav2/interest' className="hover:bg-gray-200 p-3 block">Interest</Link>
                <Link to='/nav2/accountInfo' className="hover:bg-gray-200 p-3 block">Account Settings</Link>
                <Link className="hover:bg-gray-200 p-3 block" to="/">Log Out</Link>
              </div>
            </li>
          </ul>
          </div>
        </div>
      </div>
      <Outlet />
      
    </>
  );
};

export default Nav;
