import React from 'react'
import { iconsData } from '../../data/iconsData.js';

const FirstALayer = () => {
  return (
    <> 
<section className="flex flex-col justify-center items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 bg-[ffffff] w-[100%] h-[fit] py-4 sm:py-6 lg:py-8 xl:py-10 px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-30">
  <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full justify-items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10">
    {iconsData.map(({ id, icon, title, desc }) => (
      <div key={id} className="px-2 sm:px-3 lg:px-4 sm:px-5 flex flex-col w-full lg:w-auto min-w-[280px]">
        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-[40px] lg:h-[40px] flex-shrink-0 mb-2 sm:mb-3">
          <img src={icon} alt={`This is the icon for ${title}`} className="w-full h-full object-contain" />
        </div>
        <h5 className="w-fit text-sm sm:text-base lg:text-lg xl:text-xl text-center lg:text-left font-playfair font-bold mb-1 sm:mb-2 lg:mb-3">{title}</h5>
        <p className="w-full text-xs sm:text-sm lg:text-[12px] font-inter text-center lg:text-left leading-relaxed">{desc}</p>
      </div>
    ))}
  </article>
</section>
    </>
  )
};

export default FirstALayer;