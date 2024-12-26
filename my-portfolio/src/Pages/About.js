import React from "react";
import profilePic from "../Images/profilePic.jpg";

function About() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-500 to-cyan-500 text-white px-10 md:px-20 py-16">
      
      <div className="text-center">
        <h1 className="text-5xl font-extrabold">About Me</h1>
        <p className="text-lg mt-4 font-light">
          A little bit about who I am and what I do.
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16 items-center animate-fade-in">
        
        <div className="flex justify-center">
          <img
            src={profilePic}
            alt="Frederik's Profile"
            className="w-80 h-100 rounded shadow-lg border-4 border-white"
          />
        </div>

       
        <div className="space-y-6">
          <p className="text-xl leading-relaxed">
            My Name is Frederik and i am a Full Stack Developer.
          </p>
          <p className="text-xl leading-relaxed">
            I moved to Canada in 2023 to pursue a Bachelor of Computer Science,
            where I have been developing a strong foundation in software development. 
            I am passionate about creating innovative solutions and crafting seamless digital experiences.
          </p>
          <p className="text-xl leading-relaxed">
            I have found passion in developing mobile and web applications, and
            I am constantly looking to learn new technologies to enhance my skills.
            I am proficient in React, Flutter, Swift, Kotlin & other current technologies.

          </p>

          <p className="text-xl leading-relaxed">
            Currently, i am in my third year at Sheridan College, and
            I am actively pursuing an internship to gain real-world experience during summer 2025.

          </p>

        </div>
      </div>
    </div>
  );
}

export default About;
