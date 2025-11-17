// src/components/Hero.jsx
import React from "react";
import landingImage from "../assets/landing_page1.png";

const Hero = () => {
  return (
    <section
      id="Home"
      className="relative w-full flex flex-col items-center justify-start overflow-hidden"
    >
      {/* Image Wrapper */}
      <div className="relative w-full">
        {/* HERO IMAGE (NO CROPPING, TOP ALIGNED, RESPONSIVE) */}
        <img
          src={landingImage}
          alt="Hero Background"
          className="w-full h-auto object-contain object-top block"
        />

        {/* BUTTON (RESPONSIVE BOTTOM-RIGHT OF IMAGE) */}
        <a
          href="#Project"
          className="
            absolute 
            bottom-4 right-4 
            sm:bottom-6 sm:right-6 
            border-2 text-zinc-50 border-white 
            px-4 py-2 sm:px-5 sm:py-2.5 
            rounded-full 
            hover:bg-white hover:text-black 
            transition-all duration-300 
            text-sm sm:text-base 
            font-medium 
            whitespace-nowrap 
            bg-black/60 backdrop-blur-sm shadow-lg
          "
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState(null, "", "#Project");
            document
              .querySelector("#Project")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Explore Projects
        </a>
      </div>

      {/* SCROLL ICON */}
      <div className="mt-8 animate-bounce">
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
    </section>
  );
};

export default Hero;
