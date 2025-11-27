import React from 'react'
import {Link} from 'react-router-dom'
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <> 
    <footer className='w-[100%] h-fit bg-[#455238] px-5 py-4 sm:py-6 lg:py-12 overflow-x-hidden'>
      <section className="w-full flex flex-col items-center  lg:flex-row lg:gap-5 lg:px-10 justify-between max-w-[2000px] mx-auto"> 
        <article className="flex flex-col w-full sm:w-fit px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="w-16 h-16 sm:mb-10 sm:w-20 sm:h-20 lg:w-[100px] lg:h-[100px] flex justify-between items-center rounded-md text-lg sm:text-xl lg:text-2xl">
            <img src="coffee ok.png" alt="This is for the l ogo section" className='w-[100%] h-[100%]'/>
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-[#ede6df]'>CoffeeSade</h2>
          </div>
          <p className="max-w-[480px] text-xs sm:text-sm md:text-base lg:text-md font-inter font-normal text-slate-300 mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ipsa soluta non. Aut.</p>
        </article>
        <article className="flex flex-col w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4"> 
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-extrabold mb-2 sm:mb-3 lg:mb-4 text-[#ede6df]">Navigation</h3>
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-5 text-slate-300">
            <Link className="text-sm sm:text-base lg:text-base font-inter font-normal">Home</Link>
            <Link className="text-sm sm:text-base lg:text-base font-inter font-normal">About</Link>
            <Link className="text-sm sm:text-base lg:text-base font-inter font-normal">Gallery</Link>
            <Link className="text-sm sm:text-base lg:text-base font-inter font-normal">Contact Us</Link>
          </div>
        </article>
        <article className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4"> 
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair text-[#ede6df] font-extrabold mb-2 sm:mb-3 lg:mb-4">Information</h3>
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 text-slate-300">
            <p className="text-sm sm:text-base lg:text-base font-inter font-normal">+123456789</p>
            <p className="text-sm sm:text-base lg:text-base font-inter font-normal">coffeSadeSweet@gmail.com</p>
            <p className="text-sm sm:text-base lg:text-base font-inter font-normal">890, Green Lane OrionGroup Street</p>
          </div>
        </article>
        <article className="flex flex-col w-full sm:w-fit px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair min-w-[200px] text-[#ede6df] font-extrabold mb-2 sm:mb-3 lg:mb-4">Opening Hours</h3>
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 text-slate-300"> 
            <p className="text-sm sm:text-base lg:text-base font-inter font-normal">Mon - Thu: 9:00 - 21:00</p>
            <p className="text-sm sm:text-base lg:text-base font-inter font-normal">Fri: 8:00 - 21:00</p>
            <p className="text-sm sm:text-base lg:text-base font-inter font-normal">Sat: 9:30 - 15:00</p>
            <p className="text-sm sm:text-base lg:text-base font-inter font-normal">Sun Off</p>
          </div>
        </article>
      </section>
      <div className="mt-4 sm:mt-6 lg:mt-8 text-center"> 
        <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-inter font-normal mb-2 sm:mb-3 lg:mb-4 text-[#ede6df]">Copyright &copy;2020 All rights reserved| Coffee Is Enjoyed with CoffeeSade</p>
        <div className="icons flex justify-center gap-2 sm:gap-4 lg:gap-6 xl:gap-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-15 lg:h-15 p-2 sm:p-3 rounded-full bg-[#313729] flex items-center justify-center">
            <Facebook className="text-white w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"   />
          </div>
          <div className="twe w-10 h-10 sm:w-12 sm:h-12 lg:w-15 lg:h-15 p-2 sm:p-3 rounded-full bg-[#313729] flex items-center justify-center"><Twitter className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" /></div>
          <div className="insta w-10 h-10 sm:w-12 sm:h-12 lg:w-15 lg:h-15 p-2 sm:p-3 rounded-full bg-[#313729] flex items-center justify-center"><Instagram className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" /></div>
          <div className="link w-10 h-10 sm:w-12 sm:h-12 lg:w-15 lg:h-15 p-2 sm:p-3 rounded-full bg-[#313729] flex items-center justify-center"><Linkedin className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" /></div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer