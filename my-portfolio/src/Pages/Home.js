import React from "react";
import ReactRoundedImage from "react-rounded-image";
import profilePic from "../Images/profilePic.jpg";

function Home() {
  return <div className="text-center w-full min-h-screen bg-gradient-to-b from-cyan-500 to-blue-500">

            <h1 className="text-5xl font-extrabold pt-5">
                Hi, I'm Frederik
            </h1>
            <h2 className="text-2xl mt-2 font-light">
                Full Stack Developer | Mobile Computing Specialist
            </h2>


            <div className="flex justify-center mt-10 animate-fade-in">
            <ReactRoundedImage
              image={profilePic}
              imageWidth="400"
              imageHeight="500"
              borderRadius="100"
              roundedColor=""
            />
            </div>

           
            
        </div>
        
}

export default Home;
