// src/components/Hero.jsx
import React from 'react';
import landingImage from '../assets/landing_page1.png';

const Hero = () => {
  return (
    <div
      id="Home"
      className="h-screen w-full bg-center bg-cover bg-no-repeat bg-fixed flex items-start justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url("${landingImage}")`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-white text-center relative z-10 flex flex-col justify-center h-full">
        {/* Add margin-top to push buttons lower */}
        <div className="mt-[30vh] flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#Project"
            className="border-2 border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg font-medium"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState(null, "", "#Project");
              document.querySelector("#Project")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Project
          </a>

          <a
            href="#Contact"
            className="bg-blue-600 px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 text-lg font-medium"
            onClick={(e) => {
              e.preventDefault();
              window.history.pushState(null, "", "#Contact");
              document.querySelector("#Contact")?.scrollIntoView({ behavior: "smooth" });
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
