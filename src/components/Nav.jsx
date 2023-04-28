import React from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import logo from "../assets/keep.png";
import me from "../assets/me.jpg";

const Nav = () => {
  return (
    <div className="flex justify-between items-center border-b-2 shadow-sm shadow-gray-100 py-2 px-4">
      <div className="flex items-center gap-4">
        <FiMenu className="text-2xl cursor-pointer" />
        <div className="w-10 h-10">
          <img src={logo} alt="logo" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-xl font-medium">Keep</h1>
      </div>
      <div className="flex bg-gray-200 py-2 px-4 items-center gap-4 rounded-md md:min-w-[500px]">
        <FiSearch className="text-lg text-gray-500 cursor-pointer " />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none px-2"
        />
      </div>
      <div className="rounded-full overflow-hidden w-10 cursor-pointer">
        <img src={me} alt="me" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Nav;
