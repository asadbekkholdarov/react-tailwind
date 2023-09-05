import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="text-white flex items-center justify-between h-24 px-4 max-w-[1240px] mx-auto">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">React</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Services</li>
        <li className="p-4">Blog</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="md:hidden block">
        {!nav ? <AiOutlineClose size={24}/> : <AiOutlineMenu size={24} />}
      </div>
      <div className={!nav ? 'fixed h-full top-0 left-0 w-[60%] border-r border-r-gray-900 bg-[#000] ease-in-out duration-300' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold m-4 mt-4 text-[#00df9a] ">React</h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Services</li>
          <li className="p-4 border-b border-gray-600">Blog</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
