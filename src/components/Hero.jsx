// src/components/Hero.jsx
import React from 'react';
import landingImage from '../assets/landing_page1.png';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-start overflow-hidden">
      {/* Background Image */}
      <img
        src={landingImage}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content - Positioned at LEFT-TOP */}
      <div className="relative z-20 w-full text-white pt-16 sm:pt-24 md:pt-32 px-4">
        <div className="max-w-4xl mx-auto text-left"> {/* 👈 Changed from text-center to text-left */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-white">Orczy</span>
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl font-light text-gray-200 mb-8">
            Premium Real Estate & Retail Solutions
          </p>
        </div>
      </div>

      {/* Buttons - Positioned at RIGHT-BOTTOM */}
      <div className="absolute bottom-25 right-8 z-20 flex flex-col col sm:flex-row gap-4">
        <a
          href="#Project"
          className="border-2 text-zinc-50 border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg font-medium w-full sm:w-auto text-center"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState(null, "", "#Project");
            document.querySelector("#Project")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore Projects
        </a>
        <a
          href="#Contact"
          className="bg-blue-600 px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 text-lg font-medium w-full sm:w-auto text-center"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState(null, "", "#Contact");
            document.querySelector("#Contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact Us
        </a>
      </div>

      {/* Scroll Indicator (optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;