import React from "react";


function ProjectCard({ title, description, imageUrl, codeLink, demoLink }) {
  return (
    <div className="bg-white text-black p-8 rounded-lg shadow-lg animate-fade-in flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
      {/* Project Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full md:w-1/6 max-h-64 rounded-lg shadow-md border-2 border-black"
      />

      {/* Project Details */}
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg leading-relaxed">{description}</p>
        <div className="flex justify-start mt-6 space-x-4">
          {codeLink && (
            <a
              href={codeLink}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-transform duration-200 transform hover:scale-105"
            >
              View Code
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-transform duration-200 transform hover:scale-105"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
