import React from 'react';
import { motion } from 'framer-motion';
import { reviewsData } from '../../data/reviews.js'; // Adjust the import path as needed for your file structure

const FirstALayer = () => {
  // Framer Motion variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const avatarVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } }
  };

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8" role="main" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <section className="text-center mb-12" aria-labelledby="reviews-heading">
          <motion.h1 
            id="reviews-heading" 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Customer Reviews
          </motion.h1>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </section>

        {/* Reviews Grid */}
        <motion.section 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6" 
          aria-labelledby="reviews-list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 id="reviews-list" className="sr-only">Reviews List</h2>
          {reviewsData.map((review) => {
            const { id, Name, review: reviewText, image } = review; // Destructure here
            return (
              <motion.article
                key={id}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out border border-gray-100 group"
                variants={cardVariants}
                whileHover={{ y: -4 }} // Hover lift effect
                role="article"
                aria-labelledby={`review-title-${id}`}
              >
                {/* Avatar */}
                <motion.img
                  src={image}
                  alt={`${Name}'s profile photo`}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  variants={avatarVariants}
                  whileHover="hover"
                  loading="lazy"
                />
                
                {/* Name */}
                <h3 id={`review-title-${id}`} className="text-lg font-semibold text-gray-900 text-center mb-3">
                  {Name}
                </h3>
                
                {/* Review Text */}
                <p className="text-gray-600 text-sm leading-relaxed italic text-center">
                  "{reviewText}"
                </p>
              </motion.article>
            );
          })}
        </motion.section>
      </div>
    </main>
  );
};

export default FirstALayer;