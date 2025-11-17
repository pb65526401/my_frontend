// src/components/Hero.jsx
import React from 'react';
import landingImage from '../assets/landing_page1.png';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-start overflow-hidden">
      {/* Background Image with better sizing */}
      <div className="absolute inset-0 z-0">
        <img
          src={landingImage}
          alt="Hero Background"
          className="w-fit h-fit object-cover object-center"
          style={{
            minHeight: '30vh',
            minWidth: '20vw'
          }}
        />
      </div>
      {/* Content - Positioned at LEFT-TOP */}
      <div className="relative z-20 w-2/3 text-white pt-2 sm:pt-14 md:pt-32 px-10">
        <div className="max-w-4xl mx-auto text-left">
          <h1 className="absolute text-3xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight px-0 py-0">
            Welcome to Orczy Group
          </h1>
        </div>
      </div>

      {/* Buttons - Positioned at RIGHT-BOTTOM */}
      <div className="absolute bottom-8 right-8 z-20">
  <a
    href="#Project"
    className="inline-block border-2 text-zinc-50 border-white px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2 md:py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base md:text-lg font-medium text-center whitespace-nowrap min-w-[140px] sm:min-w-[160px] md:min-w-[180px] bg-black/70 backdrop-blur-sm"
    onClick={(e) => {
      e.preventDefault();
      window.history.pushState(null, "", "#Project");
      document.querySelector("#Project")?.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Explore Projects
  </a>
</div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
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