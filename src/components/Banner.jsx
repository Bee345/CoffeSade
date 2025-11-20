import React from 'react'

const Banner = () => {
  return (
    <> 
    <section className="flex w-full h-full relative bg-[#455238] mt-20 px-12 py-4 justify-between gap-10 items-center"> 
        <div className="lftSide w-[50%] px-8 py-4">
        <h2 className='w-fit max-w-[350px]  text-[60px] text-[#ede6df] leading-[1.2] font-playfair font-bold'>Fresh Coffee & Pastries, Everyday</h2>
        <p className='w-[60%] min-w-[410px] text-[#ede6df] mt-5 mb-6 font-inter text-[14px]'>A Cozy neighborhood sport where Specialty espresso meets warm flaky croissants, Order ahead, skip  the line and savor the moment</p>
        <div className="btn flex justify-start cursor-pointer items-center w-[350px] text-[#ede6df] gap-4 mt-4">
            <button className='w-fit px-4 py-1 border-2 rounded-2xl text-base font-montserrat font-bold text-[15px] border-[#a07354] bg-[#a07354]'>Order Online</button>
            <button className='w-fit px-4 py-1 border-2 rounded-2xl text-base font-montserrat font-bold text-[15px] border-[#a07354]'>Browse Menu</button>
        </div>
                <div className="flex justify-start mt-8 gap-4"> 
            <p className='w-fit h-fit px- py-1 bg-[#313729] px-4 rounded-2xl text-[#ede6df]'>1,200+ Reviews</p>
            <p className='w-fit h-fit px- py-1 bg-[#313729] px-4 rounded-2xl text-[#ede6df]'>Locally Sourced</p>
            <p className='w-fit h-fit px- py-1 bg-[#313729] px-4 rounded-2xl text-[#ede6df]'>15-minuets PickUp</p>
        </div>
        </div>
        <div className="rgtSide w-[50%] text-sm h-fit rounded-3xl my-10 shadow-lg">
        <img src="CoffeeBanner.jpeg" alt="Banner Image" className='rounded-3xl w-[100%] h-fit'/>
        </div>
    </section>
    </>
  )
}
export default Banner;