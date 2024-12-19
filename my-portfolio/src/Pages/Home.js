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
      
      <div className="relative flex flex-col justify-center items-start bg-gradient-to-b from-cyan-500 to-blue-500 text-white px-10 md:px-20">
        
        <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-r from-cyan-500 to-transparent"></div>

        <h1 className="text-6xl font-extrabold">Hi, I'm Frederik</h1>
        <h2 className="text-3xl mt-4 font-light">
          Full Stack Developer | Mobile Computing Specialist
        </h2>
        <p className="text-xl mt-6 leading-relaxed">
          I’m a passionate Full Stack Developer and Mobile Computing Specialist
          with a strong background in building innovative solutions. Whether it’s
          designing intuitive user interfaces or engineering robust backend
          systems, I strive to create seamless digital experiences.
        </p>
        <p className="text-xl mt-4 leading-relaxed">
          Currently pursuing a Bachelor of Computer Science at Sheridan, I enjoy
          solving challenges with a focus on simplicity and efficiency. With
          expertise in Swift, React, and emerging technologies, I’m driven by a
          love for learning and crafting scalable, user-centric applications.
        </p>

        <button
          type="button"
          onClick={handleNavigation}
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-4"
        >
          Learn More
        </button>
      </div>

      
      <div
        className="relative bg-cover bg-no-repeat mix-blend-multiply"
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
