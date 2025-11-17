// src/components/CEOMessage.jsx
import React from 'react';

const CEOMessage = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8" id="CEOMessage">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          CEO Message
        </h2>
        <div className="bg-gray-50 rounded-xl shadow-sm p-6 sm:p-8 border-l-4 border-gray-300">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
            At Orczy Group, we are driven by a commitment to excellence, innovation, and meaningful impact. Every project reflects our values — integrity, foresight, and a passion for creating lasting value.
          </p>
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
            In a world of rapid change, we stand firm in our purpose: to build with vision, lead with responsibility, and serve with distinction. I am grateful for the trust of our partners and stakeholders as we continue to shape a future defined by progress and purpose.
          </p>
          <p className="text-lg sm:text-xl font-medium text-gray-900">
            — Usman Khawar, CEO, Orczy Group
          </p>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;