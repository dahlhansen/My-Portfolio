import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <a href="/">MyLogo</a>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="home" className="hover:text-blue-400">Home</a>
          <a href="about" className="hover:text-blue-400">About</a>
          <a href="projects" className="hover:text-blue-400">Projects</a>
          <a href="contact" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Mobile */}
        <button
          className="block md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 p-4">
          <a href="#home" className="block py-2 hover:text-blue-400">Home</a>
          <a href="#about" className="block py-2 hover:text-blue-400">About</a>
          <a href="#services" className="block py-2 hover:text-blue-400">Services</a>
          <a href="#contact" className="block py-2 hover:text-blue-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
