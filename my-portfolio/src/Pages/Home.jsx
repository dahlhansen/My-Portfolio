import React from "react";
import profilePic from "../Images/profilePic.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/about");
  };

  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Section */}
      <div className="relative flex flex-col justify-center items-start bg-gradient-to-b from-cyan-500 to-blue-500 text-white px-10 md:px-20">
        <div className="absolute right-0 top-0 h-full w-2"></div>

        <h1 className="font-extrabold text-[5vw] md:text-6xl animate-fade-in">Hi, I'm Frederik</h1>
        <h2 className="font-light mt-4 text-[3vw] md:text-3xl animate-fade-in">
          Full Stack Developer | Mobile Computing Specialist
        </h2>
        <p className="mt-6 leading-relaxed text-[2vw] md:text-xl animate-fade-in">
          I’m a passionate Full Stack Developer and Mobile Computing Specialist
          with a strong background in building innovative solutions. Whether it’s
          designing intuitive user interfaces or engineering robust backend
          systems, I strive to create seamless digital experiences.
        </p>
        <p className="mt-4 leading-relaxed text-[2vw] md:text-xl animate-fade-in">
          Currently pursuing a Bachelor of Computer Science at Sheridan, I enjoy
          solving challenges with a focus on simplicity and efficiency. With
          expertise in Swift, React, and emerging technologies, I’m driven by a
          love for learning and crafting scalable, user-centric applications.
        </p>

        <button
          type="button"
          onClick={handleNavigation}
          className="text-white bg-gradient-to-br from-pink-700 to-orange-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-6 py-4 text-center me-2 mb-2 mt-6 w-1/4 hover:from-pink-700 hover:to-orange-600 transition-transform duration-200 transform hover:scale-105 animate-fade-in"
        >
          Click Here to Learn More
        </button>
      </div>

      {/* Right Section */}
      <div
        className="relative bg-cover bg-no-repeat mix-blend-multiply hidden md:block"
        style={{
          backgroundImage: `url("${profilePic}")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}

export default Home;
