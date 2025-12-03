import React from 'react';
import { motion } from 'framer-motion';
import { galleryData } from '../../data/gallery.js'; // Adjust path as needed; use galleryData[0] for the actual array

const FirstALayer = () => {
  const images = galleryData[0]; // Extract the inner array

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const imageCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8" role="main" aria-labelledby="gallery-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="text-center mb-12" aria-labelledby="gallery-heading">
          <motion.h1 
            id="gallery-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-playfair-display" // Assuming Tailwind's font-playfair-display or custom class
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Coffee Gallery
          </motion.h1>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </section>

        {/* Gallery Grid */}
        <motion.section 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label="Coffee images gallery"
        >
          {images.map(({ id, image, name }) => (
            <motion.div
              key={id}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              variants={imageCardVariants}
              whileHover={{ scale: 1.05 }} // Subtle hover scale
            >
              {/* Image */}
              <img
                src={image}
                alt={name}
                className="w-full h-64 object-cover" // Fixed height for uniformity
                loading="lazy"
              />
              
              {/* Dark overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Name overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 text-white text-center"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold font-playfair-display tracking-wide">
                  {name}
                </h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </main>
  );
};

export default FirstALayer;