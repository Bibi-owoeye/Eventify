import React from "react";
import logo from "../assets/Logo.png";
import { Link, Outlet } from "react-router-dom";
import ticket from "../assets/icons8-ticket-50.png";
import star from "../assets/icons8-star-50.png";
import Home from "./Home";

const Nav = () => {
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
          <img className="w-[50%] ml-20" src={logo} alt="" />
        </div>
        <div className="flex gap-5 pt-1 text-lg font-medium pr-12">
          {navLink.map((link) => (
            <div key={link.id}>
              <Link to={link.path}>{link.name}</Link>
            </div>
          ))}
        </div>
        <div className="flex gap-5 pt-1 mr-20 text-lg font-normal">
          <Link className=" hover:text-[#ffe047]">Create Event</Link>
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
          <ul className="flex">
            <li class="relative group">
              <p className="block">Profile</p>
              <div class="absolute right-0 top-[45px] group-hover:opacity-100 transition-opacity w-48 mt-2 bg-white text-black shadow-lg  rounded-md opacity-0">
               <p className="hover:bg-gray-200 p-3" p-3> <Link >Interest</Link></p>
                <p className="hover:bg-gray-200 p-3"><Link >Account Settings</Link></p>
                <p  className="hover:bg-gray-200 p-3"><Link>Log Out</Link></p>
              </div>
            </li>
          </ul>
          </div>
        </div>
      </div>
      <Outlet />
      <Home/>
    </>
  );
};

export default Nav;
