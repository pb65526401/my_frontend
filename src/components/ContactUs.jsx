// src/components/ContactUs.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 bg-white text-gray-800">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Reach out to the Orczy Group team — we’re ready to collaborate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none transition"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none transition"
                  placeholder="you@orczy.com"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-700 mb-2 font-medium">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none transition"
                placeholder="How can we assist you?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:outline-none transition"
                placeholder="Share your thoughts with us..."
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition shadow-sm"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;