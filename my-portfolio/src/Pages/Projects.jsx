import React from "react";
import ProjectCard from "../Components/ProjectCard";
import swiftLogo from "../Images/swift.png";
import reactLogo from "../Images/react.png";

function Projects() {
  const projectData = [
    {
      title: "Application Tracker",
      description: "The application tracker, developed in swift, allows the user to create and manage job applications. The user can add, edit, and delete job applications, as well as track the status of each application. The app features a clean and intuitive user interface, making it easy to manage job applications on the go. Developed in Swift.",
      imageUrl: swiftLogo,
      codeLink: "https://github.com/dahlhansen/Application-Tracker",
      demoLink: "https://your-live-demo-link-one.com",
    },
    {
      title: "My Portfolio Website",
      description: "My Website showcases my projects, skills, and experience. The website is built using React and Tailwind CSS. The website features a responsive design, making it easy to view on any device. The website also features animations and transitions, making it visually appealing. Developed in React + Tailwind CSS.",
      imageUrl: reactLogo,
      codeLink: "https://github.com/dahlhansen/TODO",
      demoLink: "",
    },
    {
      title: "Weather App - Group Project",
      description: "We developed a weather app that allows users to search for the current weather conditions in any city. The app displays the current temperature, weather conditions, and a 5-day forecast. The app features a clean and intuitive user interface, making it easy to use. The user has the ability to save favorite cities and view the weather conditions in multiple cities at once. Developed in Swift.",
      imageUrl: swiftLogo,
      codeLink: "https://github.com/ZackOverend/PROG31975-GroupWeatherApp",
      demoLink: "www.google.com",
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-cyan-500 to-blue-500 py-10">
      {/* Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-white">My Projects</h1>
        <p className="text-lg text-white mt-4">
          Explore some of the projects I've worked on.
        </p>
      </div>

      {/* Render Project Cards */}
      <div className="space-y-4 m-4 animate-fade-in">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            codeLink={project.codeLink}
            demoLink={project.demoLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
