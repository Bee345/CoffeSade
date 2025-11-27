import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Assuming lucide-react for icons; install if needed: npm i lucide-react

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="w-full fixed h-[80px] sm:h-[90px] left-0 right-0 overflow-x-hidden flex justify-center top-0 items-center gap-4 sm:gap-8 lg:gap-90 bg-[#455238] shadow-lg z-50 px-10 sm:px-10 lg:px-0">
        {/* Logo Container */}
        <div className="w-16 sm:w-20 pl-5 lg:w-[100px] h-full flex justify-center items-center rounded-md text-xl sm:text-2xl">
          <img src="coffee ok.png" alt="This is for the logo section" className="w-full h-full object-contain" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex justify-center items-center gap-5 py-3 px-5 font-inter text-sm lg:text-base text-[#ede6df] flex-1">
          <Link to="/" className="w-fit h-[30px] px-3 rounded-md hover:shadow-2xl hover:shadow-slate-300 hover:transition-shadow duration-500 ease-in-out">Home</Link>
          <Link to="/menu" className="w-fit h-[30px] px-3 rounded-md hover:shadow-2xl hover:shadow-slate-300 hover:transition-shadow duration-500 ease-in-out">Menu</Link>
          <Link to="/about" className="w-fit h-[30px] px-3 rounded-md hover:shadow-2xl hover:shadow-slate-300 hover:transition-shadow duration-500 ease-in-out">About</Link>
          <Link to="/reviews" className="w-fit h-[30px] px-3 rounded-md hover:shadow-2xl hover:shadow-slate-300 hover:transition-shadow duration-500 ease-in-out">Reviews</Link>
          <Link to="/gallery" className="w-fit h-[30px] px-3 rounded-md hover:shadow-2xl hover:shadow-slate-300 hover:transition-shadow duration-500 ease-in-out">Gallery</Link>
          <Link to="/location" className="w-fit h-[30px] px-3 rounded-md hover:shadow-2xl hover:shadow-slate-300 hover:transition-shadow duration-500 ease-in-out">Location</Link>
          <Link to="/contact" className="w-fit h-[30px] px-3 rounded-md hover:shadow-2xl hover:shadow-slate-300 hover:transition-shadow duration-500 ease-in-out">Contact</Link>
          <Link to="/online" className="border-2 border-[#a07354] bg-[#a07354] px-3 py-1 rounded-xl font-base text-[#ede6df] shadow-md hover:shadow-lg transition-shadow duration-300">Order Online</Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden ml-auto text-[#ede6df] text-xl sm:text-2xl"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Side Nav */}
      <nav
        className={`${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden fixed top-0 right-0 h-full w-80 sm:w-96 bg-[#455238] shadow-2xl z-40 transition-transform duration-300 ease-in-out transform`}
      >
        <div className="flex flex-col h-full pt-20 px-6 py-4 font-inter text-base text-[#ede6df]">
          <Link
            to="/"
            className="w-full py-4 px-3 rounded-md hover:shadow-inner hover:shadow-slate-300 hover:transition-shadow duration-300 border-b border-[#a07354]/30"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/Menu"
            className="w-full py-4 px-3 rounded-md hover:shadow-inner hover:shadow-slate-300 hover:transition-shadow duration-300 border-b border-[#a07354]/30"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Menu
          </Link>
          <Link
            to="/About"
            className="w-full py-4 px-3 rounded-md hover:shadow-inner hover:shadow-slate-300 hover:transition-shadow duration-300 border-b border-[#a07354]/30"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/Reviews"
            className="w-full py-4 px-3 rounded-md hover:shadow-inner hover:shadow-slate-300 hover:transition-shadow duration-300 border-b border-[#a07354]/30"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reviews
          </Link>
          <Link
            to="/Gallery"
            className="w-full py-4 px-3 rounded-md hover:shadow-inner hover:shadow-slate-300 hover:transition-shadow duration-300 border-b border-[#a07354]/30"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/Location"
            className="w-full py-4 px-3 rounded-md hover:shadow-inner hover:shadow-slate-300 hover:transition-shadow duration-300 border-b border-[#a07354]/30"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Location
          </Link>
          <Link
            to="/Contact"
            className="w-full py-4 px-3 rounded-md hover:shadow-inner hover:shadow-slate-300 hover:transition-shadow duration-300 border-b border-[#a07354]/30"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/Online"
            className="mt-auto w-full border-2 border-[#a07354] bg-[#a07354] px-6 py-3 rounded-xl font-semibold text-[#ede6df] shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Order Online
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};

export default Header;

// // THese are the colors for the LSHeader component
// 1D0200:Very Dark Brown
// #4E3731:Royal Brown
// #301B1A:Dark Sienna

// Copper: #B87333
// Brown: #A52A2A
// Muted Orange-Brown: 