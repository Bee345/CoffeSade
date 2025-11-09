import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBars } from "react-icons/fa";

const header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <> 
   <header className="fixed top-0 left-0 w-full h-[60px] bg-[#40171f] flex items-center justify-between px-4 md:px-8 z-50 shadow-lg">
      {/* Logo */}
      <div className="max-w-[150px] text-center">
        <p className="font-serif text-lg text-white">Coffee Tea</p>
      </div>

      {/* Navigation */}
      <nav
        className={`absolute md:static top-[60px] left-0 
          w-[60%] md:w-auto h-[calc(100vh-60px)] md:h-auto 
          bg-[#40171f] md:bg-transparent transition-all duration-300 ease-in-out 
          ${menuOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 flex flex-col md:flex-row md:items-center p-6 md:p-0`}
      >
        <ul className="flex flex-col md:flex-row gap-6 md:gap-8 list-none">
            <Link
              to="/"
              className="text-white font-mono font-bold hover:text-gray-300 transition-colors"
              
            >
              Home
            </Link>

            <Link
              to="/#about"
              className="text-white font-mono font-bold hover:text-gray-300 transition-colors"
              
            >
              About
            </Link>


            <Link
              to="/#menu"
              className="text-white font-mono font-bold hover:text-gray-300 transition-colors"
              
            >
              Menu
            </Link>


            <Link
              to="/#Testimonial"
              className="text-white font-mono font-bold hover:text-gray-300 transition-colors"
             
            >
              Testimonies
            </Link>

            <Link
              to="/#Gallery"
              className="text-white font-mono font-bold hover:text-gray-300 transition-colors"
              
            >
              Gallery
            </Link>


            <Link
              to="/#contact"
              className="text-white font-mono font-bold hover:text-gray-300 transition-colors"
             
            >
              Contact
            </Link>

        </ul>
      </nav>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 flex items-center justify-center rounded-md border-2 border-[#40171f] bg-transparent shadow-md shadow-pink-300"
        >
          <FaBars className="text-white text-xl" />
        </button>
      </div>
    </header>
    </>
  )
}

export default header;