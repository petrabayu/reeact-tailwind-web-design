import React, { useState } from "react";
import { FaBars, FaX } from "react-icons/fa6";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navHandler = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto">
        <h1 className="w-full text-3xl font-bold text-[var(--primary-color)] px-4">
          REACT.
        </h1>
        <ul className="hidden md:flex ">
          <li className=" p-4">HOME</li>
          <li className=" p-4">COMPANY</li>
          <li className=" p-4">RESOURCES</li>
          <li className=" p-4">ABOUT</li>
          <li className=" p-4">CONTACT</li>
        </ul>
        <div className="px-4 md:hidden" onClick={navHandler}>
          {isNavOpen ? <FaX size={28} /> : <FaBars size={28} />}
        </div>
        <ul
          className={
            isNavOpen
              ? "md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] duration-500"
              : "duration-1000 fixed top-0 left-[-100%] h-full w-[60%]"
          }
        >
          <li className=" p-4 pt-8 text-3xl font-bold text-[var(--primary-color)]">
            REACT.
          </li>
          <li className=" p-4 ">HOME</li>
          <li className=" p-4 border-t-[1px] border-gray-600">COMPANY</li>
          <li className=" p-4 border-t-[1px] border-gray-600">RESOURCES</li>
          <li className=" p-4 border-t-[1px] border-gray-600">ABOUT</li>
          <li className=" p-4 border-t-[1px] border-gray-600">CONTACT</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
