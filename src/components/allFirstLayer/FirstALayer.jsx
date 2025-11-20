import React from 'react'
import { iconsData } from '../../data/iconsData.js';

const FirstALayer = () => {
  return (
    <> 
<section className="flex flex-col justify-center items-center gap-20 bg-[ffffff] w-[100%] h-[fit] py-10 px-30">
  <article className="flex justify-center items-center gap-10">
    {iconsData.map(({ id, icon, title, desc }) => (
      <div key={id} className="px-5 flex flex-col w-[100%]">
        <div className="w-[40px]">
          <img src={icon} alt={`This is the icon for ${title}`} />
        </div>
        <h5 className="w-fit font-playfair text-[18px] font-bold mb-3">{title}</h5>
        <p className="w-[100px] min-w-[200px] text-[12px] font-inter">{desc}</p>
      </div>
    ))}
  </article>
</section>
    </>
  )
};

export default FirstALayer;