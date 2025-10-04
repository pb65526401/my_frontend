// src/components/Body.jsx (Updated "About Our Brand" Section)
import React from "react";
import { 
  testimonialsData, 
  background1, 
  background2, 
  cardLogo1, 
  cardLogo2, 
  cardLogo3, 
  cheifBackground, 
  map,
  brand_img
} from '../assets/assets';

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="Body">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">About <span className="underline underline-offset-4 font-light">Our Brand</span></h1>
      <p className="text-gray-500 max-w-fit text-center mb-8">Passionate About Properties, Dedicated to Your Vision</p>

      {/* Image + Stats Row */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 w-full">
        {/* Image */}
        <div className="w-full sm:w-1/1.5 max-w-lg">
          <img 
            src={brand_img} 
            alt="Orczy Group - Modern Architecture" 
            className="w-full h-auto rounded-lg shadow-md"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/600x400?text=Brand+Image";
              e.target.alt = "Placeholder Brand Image";
            }}
          />
        </div>

        <div className="flex flex-col items-center md:items-start mt-2 text-gray-600 w-full md:w-auto">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p className="text-sm md:text-base">Years of Excellence</p>
            </div>                
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p className="text-sm md:text-base">Projects Complete</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p className="text-sm md:text-base">Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p className="text-sm md:text-base">Ongoing Projects</p>
            </div>
          </div>
        <p className="my-5 max-w-lg">
        Our Group is a multinational conglomerate that leverages private equity to finance lifestyle projects in Pakistan and Central Eastern Europe. In uncertain times, we believe investors need stable, credible opportunities to generate multiple income streams. Today’s consumers demand quality, convenience, and affordability without compromise. Yet, time, knowledge, and networks often stand between investors and promising ideas. As investment becomes more institutionalised and professional, high transaction costs increasingly deter participation. Our Founding Partner, Usman Khawar, recognised this market gap in 2012.
        </p>
        <button className="bg-blue-600 text-white px-8 py-2 rounded-2xl">Learn More</button>
        </div>
      </div>
    </div>
  );
};