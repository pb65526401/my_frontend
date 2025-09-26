// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div 
      className="min-h-[85vh] md:min-h-screen w-full bg-cover bg-center flex items-center justify-center relative overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Home"
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-opacity-40"></div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-white text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl mx-auto leading-tight mb-8">
          Explore homes that fit your dreams
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#Project"
            className="border-2 border-white px-6 py-3 rounded-full text-center hover:bg-white hover:text-black transition-all duration-300 text-lg font-medium"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState(null, '', '#Project');
              document.querySelector('#Project')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Project
          </a>
          <a
            href="#Contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-full text-center hover:bg-blue-700 transition-all duration-300 text-lg font-medium"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState(null, '', '#Contact');
              document.querySelector('#Contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;