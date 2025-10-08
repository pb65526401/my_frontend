// src/components/Projects.jsx
import React from 'react';
import { projectsData } from '../assets/assets';

const Projects = () => {
  return (
    <div className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full" id="Project">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects <span className="underline underline-offset-4 decoration-1 font-light">Completed</span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-96 mx-auto">
        Crafting Spaces, Building Legacies — Explore Our Portfolio
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/600x400?text=Project+Image";
                e.target.alt = "Placeholder Project Image";
              }}
            />

            {/* Text Overlay - Bottom Center */}
            <div className="absolute left-0 right-0 bottom-0 p-3 bg-white bg-opacity-90">
              <h2 className="text-sm font-semibold text-gray-800">{project.title}</h2>
              <p className="text-gray-500 text-xs mt-2">
                {project.price} <span className="mx-0 px-1">|</span> {project.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;