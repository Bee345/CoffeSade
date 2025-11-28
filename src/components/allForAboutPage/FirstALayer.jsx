import React from 'react'


const FirstALayer = ({ infos = [] }) => {
  // Sample write-up (under 400 words: ~250 words)
  const writeUp = `
    Welcome to CoffeeSade, where every cup tells a story of passion, tradition, and innovation. Nestled in the heart of the bustling city, our cozy haven was born from a simple dream: to bring the rich, aromatic world of coffee closer to those who cherish its warmth and depth.
    
    Founded in 2018 by coffee aficionado Elena Sade, who hails from the misty hills of Ethiopia—home to the birthplace of coffee—CoffeeSade is more than just a shop; it's a celebration of beans sourced ethically from small-scale farmers around the globe. We roast our blends in-house, ensuring each batch captures the essence of its origin, from the fruity notes of Yirgacheffe to the chocolatey whispers of Brazilian Santos.
    
    Our space is designed as a sanctuary for the soul—a blend of rustic wooden accents, plush velvet seating, and soft ambient lighting that invites you to linger. Whether you're fueling a morning hustle with our signature Sade Latte (infused with house-made vanilla syrup) or unwinding with an evening pour-over, our baristas—trained artisans with a keen eye for perfection—craft beverages that awaken your senses.
    
    At CoffeeSade, sustainability is woven into our ethos. We partner with fair-trade cooperatives, use compostable packaging, and host monthly workshops on home brewing and bean-to-cup journeys. Join our community of flavor explorers; here, every visit brews a new connection.
    
    Come, pull up a chair. Let’s savor the moments that matter.
  `;

  // The array to destructure: Each object must have 'title' (string), 'description' (string), and optionally 'icon' (string, e.g., emoji)
  // Pass this as the 'infos' prop to the component, or use it directly inside if no prop is passed
  const sampleInfos = [
    { title: "Ethically Sourced", description: "100% fair-trade beans from sustainable farms worldwide.", icon: "☕" },
    { title: "In-House Roasting", description: "Freshly roasted daily for peak flavor and aroma.", icon: "🔥" },
    { title: "Cozy Atmosphere", description: "A welcoming space with artisanal decor and live acoustic sets.", icon: "🛋️" },
    { title: "Community Focus", description: "Workshops, events, and support for local artists and causes.", icon: "❤️" }
  ];

  // Fixed the ternary syntax by adding parentheses around it
  const infosToRender = infos.length > 0 ? infos : sampleInfos;

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About CoffeeSade
          </h1>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Write-up Section */}
        <div className="prose prose-lg max-w-4xl mx-auto mb-16 text-gray-700 leading-relaxed">
          <div 
            className="text-base sm:text-lg bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-amber-100"
            dangerouslySetInnerHTML={{ __html: writeUp.replace(/\n/g, '<br />') }}
          />
        </div>

        {/* Dynamic Infos Section - Maps through the array, destructuring { title, description, icon } */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {infosToRender.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {icon || '🌟'}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstALayer;