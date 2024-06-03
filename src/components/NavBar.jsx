import React, { useEffect, useState } from "react";
import logo from "../assets/Logo.png";
import { BiPhoneCall } from "react-icons/bi";
const NavBar = () => {
 let [sticky , setSticky] = useState(false);
 useEffect(()=>{
  const handleScrol=()=>{
    const offset= window.scrollY;
    if(offset >0){
      setSticky(true);
    }else{
    setSticky(false);
    }
  }
  window.addEventListener("scroll",handleScrol);
  return()=>{
    window.addEventListener("scroll",handleScrol);

  }
 },[])

  return (
    <header className="max-w-screen-2xl  fixed top-0  left-0 right-0  transition-all duration-300 ease-out   ">
     
      <div className={ `navbar xl:px-24  ${sticky ? "shadow-md bg-base-100  transition-all duration-300 ease-out " : ""}`}  >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/"> Home </a>
              </li>
              <li>
                <a>Menue</a>
                <ul className="p-2">
                  <li>
                    <a>All </a>
                  </li>
                  <li>
                    <a> Salad </a>
                  </li>
                  <li>
                    <a>Pizza</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Services</a>
                <ul className="p-2">
                  <li>
                    <a>Online Order</a>
                  </li>
                  <li>
                    <a> Table Booking </a>
                  </li>
                  <li>
                    <a>Order Traking</a>
                  </li>
                </ul>
              </li>
              <li>
                <a> Offers </a>
              </li>
              <li>
                <a> About </a>
              </li>
            </ul>
          </div>

          <img className="w-48 cursor-pointer" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <details>
                <summary> Menue </summary>
                <ul className="p-2">
                  <li>
                    <a>All</a>
                  </li>
                  <li>
                    <a>Salad</a>
                  </li>
                  <li>
                    <a>Pizza</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary> Services </summary>
                <ul className="p-2">
                  <li>
                    <a> Online Order</a>
                  </li>
                  <li>
                    <a>Table Booking</a>
                  </li>
                  <li>
                    <a>Order Traking</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Offers</a>
            </li>
            <li>
              <a> About </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle hidden lg:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <a className="btn bg-rose-600   rounded-full px-3 text-white flex items-center  gap-1 hover:bg-orange-900">
            <BiPhoneCall /> Contact{" "}
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
