import React from 'react'
import {cupCakes} from '../../data/cupCakes.js';
const FirstDLayer = () => {
    // Icon mapping for drink-specific emojis
  const getDrinkIcon = (name) => {
    const icons = {
      'Vanilla Dream': '☕',
      'Chocolate Eclipse': '☕🥛',
      'Red Velvet Whisper': '🥛☕',
      'Salted Caramel Symphony': '☕',
      'Strawberry Serenade': '🥛',
      'Lemon Zest Reverie': '🍫☕',
      'Peanut Butter Harmony': '☕',
      'Coconut Lagoon': '☕'
    };
    return icons[name] || '☕';
  };
   
  return (
    <> 
    <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }
        .stagger-8 { animation-delay: 0.8s; }
      `}</style>
      <section className="headi flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px] bg-gradient-to-br from-amber-50 via-white to-amber-50 overflow-hidden">
        <article className=" w-fit h-fit rounded-4xl my-auto right flex-1 relative overflow-hidden">
          <img
            src="CoffeeImg2.jpeg" // Replace with actual image URL
            alt="Espresso Creations"
            className="w-full h-full object-cover rounded-4xl transition-transform duration-1000 hover:scale-105"
          />
          {/* Enhanced subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-brown-900/10"></div>
        </article>
        <article className="left flex-1 p-6 lg:p-8 flex flex-col justify-center">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-amber-100/50 max-w-lg mx-auto lg:mx-0 animate-fadeInUp w-full">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-8 text-center lg:text-left bg-gradient-to-r from-amber-600 via-orange-600 to-brown-600 bg-clip-text text-transparent animate-fadeInUp leading-tight">
              Signature Cupcakes
            </h2>
            <div className="space-y-6">
              {cupCakes.map(({id, name, price, description}, index) => (
                <div
                  key={id}
                  className={`group flex flex-col sm:flex-row sm:justify-between sm:items-start pb-6 border-b border-amber-200/50 last:border-b-0 hover:border-amber-300/70 transition-all duration-500 relative animate-fadeInUp stagger-${index + 1}`}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 via-amber-400/5 to-orange-500/0 group-hover:from-amber-400/5 group-hover:via-amber-400/10 group-hover:to-orange-500/5 transition-all duration-500"></div>
                  
                  {/* Drink Icon */}
                  <div className="flex items-center justify-center w-10 h-10 mb-3 sm:mb-0 sm:mr-4 flex-shrink-0 text-2xl group-hover:scale-110 transition-transform duration-300">
                    <span className="text-amber-500 group-hover:text-orange-600">{getDrinkIcon(name)}</span>
                  </div>
                  
                  <div className="flex-1 relative z-10">
                    <h3 className="text-xl font-serif font-bold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors duration-300 leading-snug">
                      {name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed font-light relative z-10 italic">
                      {description}
                    </p>
                  </div>
                  
                  <div className="text-right flex-shrink-0 relative z-10 mt-3 sm:mt-0">
                    <span className="text-2xl font-serif font-extrabold bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 bg-clip-text text-transparent drop-shadow-sm group-hover:from-orange-500 group-hover:via-red-500 group-hover:to-orange-600 transition-all duration-300 leading-none">
                      {price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
        
      </section>
    </>
  )
}

export default FirstDLayer;