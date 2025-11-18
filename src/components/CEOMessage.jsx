// src/components/CEOMessage.jsx
import React from 'react';
import { motion } from 'framer-motion';

const CEOMessage = () => {
  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            A Message from Our CEO
          </h1>
          <p className="text-lg text-gray-600">Usman Khawar, CEO — Orczy Group</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm"
        >
          <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
            <p>
              At Orczy Group, we are driven by a commitment to excellence, innovation, and meaningful impact. Every project reflects our values — integrity, foresight, and a passion for creating lasting value.
            </p>
            <p>
              In a world of rapid change, we stand firm in our purpose: to build with vision, lead with responsibility, and serve with distinction. I am grateful for the trust of our partners and stakeholders as we continue to shape a future defined by progress and purpose.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-right">
            <p className="text-xl font-semibold text-gray-900">— Usman Khawar</p>
            <p className="text-gray-600">CEO, Orczy Group</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CEOMessage;