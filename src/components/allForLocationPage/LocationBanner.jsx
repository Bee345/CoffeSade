import React from 'react'

const LocationBanner = () => {
  return (
    <> 
    <section className="flex flex-col lg:flex-row w-full h-full relative bg-[#455238] mt-8 sm:mt-12 lg:mt-16 xl:mt-20 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 py-3 sm:py-4 lg:py-6 xl:py-8 justify-center lg:justify-between gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 items-stretch lg:items-center">
  <div className="leftSide w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 order-2 lg:order-1">
    <h2 className="w-full lg:w-fit lg:max-w-[350px] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] text-[#ede6df] leading-tight sm:leading-snug lg:leading-[1.2] font-playfair font-bold mb-2 sm:mb-4 lg:mb-6">Where Every Moment Tastes Better</h2>
    <p className="w-full lg:w-[60%] lg:min-w-[410px] text-[#ede6df] mt-3 sm:mt-4 lg:mt-5 mb-4 sm:mb-5 lg:mb-6 font-inter text-xs sm:text-sm md:text-base lg:text-[14px]">From silky cappuccinos to flaky pastries, each visit is a little escape. Step in, unwind, and make every sip memorable.</p>
    <div className="btn flex flex-col sm:flex-row justify-start cursor-pointer items-stretch sm:items-center w-full sm:w-[350px] text-[#ede6df] gap-2 sm:gap-4 mt-2 sm:mt-3 lg:mt-4">
      <button className="w-full sm:w-fit px-3 sm:px-4 py-2 sm:py-1 border-2 rounded-2xl text-sm sm:text-base font-montserrat font-bold border-[#a07354] bg-[#a07354]">Order Online</button>
      <button className="w-full sm:w-fit px-3 sm:px-4 py-2 sm:py-1 border-2 rounded-2xl text-sm sm:text-base font-montserrat font-bold border-[#a07354]">Browse Menu</button>
    </div>
    <div className="flex flex-wrap justify-start mt-4 sm:mt-6 lg:mt-8 gap-2 sm:gap-3 lg:gap-4"> 
      <p className="w-fit h-fit px-3 sm:px-4 py-2 bg-[#313729] rounded-2xl text-[#ede6df] text-xs sm:text-sm">1,200+ Reviews</p>
      <p className="w-fit h-fit px-3 sm:px-4 py-2 bg-[#313729] rounded-2xl text-[#ede6df] text-xs sm:text-sm">Locally Sourced</p>
      <p className="w-fit h-fit px-3 sm:px-4 py-2 bg-[#313729] rounded-2xl text-[#ede6df] text-xs sm:text-sm">15-minutes PickUp</p>
    </div>
  </div>
  <div className="rightSide w-full lg:w-1/2 text-xs sm:text-sm h-fit rounded-2xl lg:rounded-3xl my-4 sm:my-6 lg:my-8 xl:my-10 shadow-md lg:shadow-lg order-1 lg:order-2">
    <img src="CoffeeBanner5.jpeg" alt="Banner Image" className="rounded-2xl lg:rounded-3xl w-full h-auto object-cover"/>
  </div>
</section>
    </>
  )
}

export default LocationBanner