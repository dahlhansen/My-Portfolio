import React, { useState } from 'react';
import { Link } from "react-router-dom"
import logo from '../Images/logo_fh.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center pr-2 pl-2 pt-1">
        <div className="">
          <a href='/'>
          <img src={logo} alt="MyLogo" className="h-20 w-20"></img>
          </a>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex space-x-6 justify-between items-center">
          <Link to="/home" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
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
          <Link to="/home" className="block py-2 hover:text-blue-400">Home</Link>
          <Link to="/about" className="block py-2 hover:text-blue-400">About</Link>
          <Link to="/projects" className="block py-2 hover:text-blue-400">Projects</Link>
          <Link to="/Contact" className="block py-2 hover:text-blue-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
