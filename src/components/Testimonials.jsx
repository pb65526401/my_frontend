// src/components/Testimonials.jsx
import React, { useState } from 'react';
import { testimonialsData } from '../assets/assets';
import star_icon from '../assets/star_icon.svg';

const Testimonials = () => {
  // State to track expanded testimonials
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Helper to truncate text
  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="container mx-auto py-10 lg:px-32 w-full overflow-hidden" id="Testimonials">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer <span className="underline underline-offset-4 decoration-2 font-light">Testimonials</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-96 mx-auto">
        Real Stories from those Who Found Home with Us
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => {
          const isExpanded = expanded[index];
          const shouldTruncate = testimonial.text.length > 150;
          const displayText = isExpanded 
            ? testimonial.text 
            : truncateText(testimonial.text);

          return (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              {/* Star Rating - Top */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <img 
                    key={i} 
                    src={star_icon} 
                    alt="Star" 
                    className="w-5 h-5"
                  />
                ))}
              </div>

              {/* Profile Image */}
              <div className="w-20 h-20 rounded-full mx-auto mb-6 overflow-hidden border-2 border-gray-200">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/80?text=Client";
                    e.target.alt = "Client Avatar";
                  }}
                />
              </div>

              {/* Name & Title */}
              <h2 className="text-xl font-semibold text-gray-800 mb-1">{testimonial.name}</h2>
              <p className="text-gray-600 text-sm mb-6 italic">{testimonial.title}</p>

              {/* Testimonial Text */}
              <p className="text-gray-700 text-sm leading-relaxed min-h-[100px]">
                "{displayText}"
              </p>

              {/* Read More Button */}
              {shouldTruncate && (
                <button
                  onClick={() => toggleExpand(index)}
                  className="mt-4 text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center mx-auto"
                >
                  {isExpanded ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                      Show Less
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      Read More
                    </>
                  )}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;