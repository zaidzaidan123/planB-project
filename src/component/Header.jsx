import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const menuItems = [
    "Home",
    "Travel to Jordan",
    "Holidays & Ticketing",
    "Luxury Events",
    "Hajj & Umrah",
    "Contact Us",
    "About Us",
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLanguageChange = (event) => setLanguage(event.target.value);

  return (
    <header className="bg-white shadow-md w-full">
      <div className="relative flex justify-end items-center p-4">
        {/* Logo - Positioned Larger & Overlapping Hero Section */}
        <a href="/" className="absolute top-[-20px] left-0 mt-6 z-100">
          <img src={logo} alt="Logo" className="h-20 md:h-28 lg:h-32" />
        </a>

        {/* Navigation */}
        <nav className="hidden xl:flex space-x-10 text-teal-700 font-medium justify-end w-full">
          {menuItems.map((item, index) => (
            <a key={index} href="/" className="hover:text-black">
              {item}
            </a>
          ))}
        </nav>

        {/* Login & Language Selector */}
        <div className="flex items-center gap-4 ml-5">
          <a
            href="/login"
            className="border-2 border-gray-700 px-5 py-1 rounded-md font-semibold text-teal-700 hover:bg-gray-100 transition-all"
          >
            Login
          </a>

          {/* Language Selector */}
          <div className="relative">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="appearance-none font-semibold text-teal-700 pr-6 bg-transparent cursor-pointer focus:outline-none"
            >
              <option value="EN">EN</option>
              <option value="AR">AR</option>
            </select>
            <span className="absolute right-1 top-1/2 -translate-y-1/2 text-teal-700">▼</span>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="xl:hidden text-gray-700">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="xl:hidden bg-white shadow-md absolute top-20 z-100 left-0 w-full py-4 flex flex-col items-center">
          {menuItems.map((item, index) => (
            <a key={index} href="/" className="py-2">
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
  
};

export default Header;
