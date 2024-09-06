import React, { useState } from "react";
import pic from "../../public/profile.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-gray-300">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
          <div>
            <h1 className="font-semibold text-xl cursor-pointer">
              Dish<span className="text-red-500 text-2xl">a</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
        </div>
        {/* Desktop navbar */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(({ id, text }) => (
            <li
              className="list-none hover:scale-105 duration-200 cursor-pointer"
              key={id}
            >
              <Link
                to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {text}
              </Link>
            </li>
          ))}
        </div>
        {/* Mobile menu toggle */}
        <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
          {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>
      {/* Mobile navbar */}
      {menu && (
        <div className="md:hidden bg-gray-300 absolute top-16 left-0 right-0 shadow-lg">
          <ul className="list-none flex flex-col items-center space-y-3 py-4 text-xl">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                key={id}
              >
                <Link
                  onClick={() => setMenu(false)} // Close the menu when an item is clicked
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
