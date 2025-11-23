import React from 'react'
import{ Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import { FaBookOpen } from 'react-icons/fa';

const LSHeader = () => {
  return (
   <> 
   <header className='w-[100%] fixed h-[80px] flex justify-center top-0 items-center gap-90 bg-[#455238] shadow-lg z-50'> 
    {/* Logo Container */}
    <div className="w-[100px] h-[100%] flex justify-center items-center rounded-md text-2xl">
      <img src="coffee ok.png" alt="This is for the logo section" className='w-[100%] h-[100%]' />
    </div>
    {/* Nav Link Container */}
    <nav className="flex justify-between gap-5 py-3 px-2 font-inter text-[16px] text-base text-[#ede6df]">
      <Link to="/" className='w-fit h-[30px] px-3 rounded-md hover:shadow-2xl hover:shadow-slate-300 hover:transition-shadow duration-500 ease-in-out'>Home</Link>
      <Link to="/Menu" className='w-fit h-[30px] px-3 rounded-md hover:shadow-2xl hover:shadow-slate-300 hover:transition-shadow duration-500 ease-in-out'>Menu</Link>
      <Link to="/About" className='w-fit h-[30px] px-3 rounded-md hover:shadow-2xl hover:shadow-slate-300 hover:transition-shadow duration-500 ease-in-out'>About</Link>
      <Link to="/Reviews" className='w-fit h-[30px] px-3 rounded-md hover:shadow-2xl hover:shadow-slate-300 hover:transition-shadow duration-500 ease-in-out'>Reviews</Link>
      <Link to="/Gallery" className='w-fit h-[30px] px-3 rounded-md hover:shadow-2xl hover:shadow-slate-300 hover:transition-shadow duration-500 ease-in-out'>Gallery</Link>
      <Link to="/Location" className='w-fit h-[30px] px-3 rounded-md hover:shadow-2xl hover:shadow-slate-300 hover:transition-shadow duration-500 ease-in-out'>Location</Link>
      <Link to="/Contact" className='w-fit h-[30px] px-3 rounded-md hover:shadow-2xl hover:shadow-slate-300 hover:transition-shadow duration-500 ease-in-out'>Contact</Link>
      <Link to="/Online" className='border-2 border-[#a07354] bg-[#a07354] px-3 py-1 rounded-xl font-base text-[#ede6df] shadow-md'>Order Online</Link>
    </nav>
   </header>
   </>
  )
}

export default LSHeader;

// // THese are the colors for the LSHeader component
// 1D0200:Very Dark Brown
// #4E3731:Royal Brown
// #301B1A:Dark Sienna

// Copper: #B87333
// Brown: #A52A2A
// Muted Orange-Brown: 