import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactData } from '../../data/contact.js'; // Adjust path as needed; use contactData[0] for the actual array

const FirstALayer = () => {
  const contacts = contactData[0]; // Extract the inner array

  // Form state
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log('Form submitted:', formData);
    alert('Message sent! Thanks for reaching out.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Framer Motion variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8" role="main" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.section className="text-center mb-12" variants={itemVariants} initial="hidden" animate="visible">
          <h1 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-playfair-display">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">We'd love to hear from you! Reach out for inquiries, feedback, or just to chat about coffee.</p>
          <div className="w-20 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
        </motion.section>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info Section */}
          <motion.section className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
            <h2 className="sr-only">Contact Information</h2>
            {contacts.map(({ id, type, label, value, city, icon, link }) => (
              <motion.div
                key={id}
                className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 group"
                whileHover={{ x: 5 }} // Subtle slide on hover
              >
                <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">{icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">{label}</h3>
                  {type === 'address' ? (
                    <p className="text-gray-700">
                      {value}, {city}
                    </p>
                  ) : type.startsWith('social-') ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-amber-500 transition-colors duration-300 font-medium"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-medium">
                      {value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.section>

          {/* Form Section with Image */}
          <motion.section className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
            {/* Decorative Image */}
            <motion.div
              className="relative overflow-hidden rounded-xl shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop"
                alt="Cozy coffee shop interior"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </motion.div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 font-playfair-display">Send Us a Message</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              ></textarea>
              <motion.button
                type="submit"
                className="w-full bg-amber-500 text-white py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.section>
        </div>
      </div>
    </main>
  );
};

export default FirstALayer;