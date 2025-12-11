import React from 'react'
import {menuDisplayData} from '../../data/menuDisplayData.js';

const FirstBLayer = () => {
  return (
    
<article className="relative mx-auto">
  <h3 className='md:px-8 font-montserrat font-bold text-[28px]'>Menu Highlights</h3>
  <div className="bg-beige-100 py-8 px-2 md:px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
      {menuDisplayData.map(({ id, img, title, desc }) => (
        <div
          key={id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 min-h-80 flex flex-col min-w-[280px]"
        >
          <div className="relative flex-1 z-10"> {/* Image container stretches to fill */}
            <img
              src={`/images/${img}`}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end text-center p-6 z-20 bg-black/40"> {/* Full cover dark overlay; flex-col justify-end pushes text to bottom */}
              <h3 className="text-[25px] font-semibold text-white mb-2 font-playfair italic">
                {title}
              </h3>
              <p className="text-slate-200 text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</article>
  )
}

export default FirstBLayer;