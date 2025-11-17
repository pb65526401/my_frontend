// src/components/Vision.jsx
import React from 'react';

const Vision = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Our Vision
        </h2>
        <div className="bg-white rounded-xl shadow-md p-6 sm:p-8 border-l-4 border-indigo-500">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            To be a leading, trusted name in every sector we operate in — empowering communities and creating lasting impact through innovation and quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Vision;