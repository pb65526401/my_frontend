// src/components/Mission.jsx
import React from 'react';

const Mission = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-white-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Our Mission
        </h2>
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 border-l-4 border-indigo-500">
          <ul className="space-y-3 text-left sm:text-center">
            <li className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              • Deliver outstanding experiences and value to our customers and partners.
            </li>
            <li className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              • Lead with integrity and a commitment to excellence in all operations.
            </li>
            <li className="text-lg sm:text-xl text-gray-700 leading-relaxed">
              • Drive progress through innovation, sustainability, and community-focused growth.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mission;