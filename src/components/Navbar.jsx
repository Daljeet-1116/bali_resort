import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() { 
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full fixed left-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/50 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-8xl mx-auto px-6 flex justify-between items-center h-16">
    
          <div className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Logo" className="w-20 h-16 mt-4" />
          </div>

        
          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex space-x-10 text-white border-white border-b">
              <span className="font-xl py-3 pt-5 pe-24">BALI</span>
              <a href="#" className="py-5 hover:text-gray-700 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Hotels</a>
              <a href="#" className="py-5 hover:text-gray-700 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Dining</a>
              <a href="#" className="py-5 hover:text-gray-700 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Spa</a>
              <a href="#" className="py-5 hover:text-gray-700 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Experiences</a>
              <a href="#" className="py-5 hover:text-gray-700 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Wedding</a>
              <a href="#" className="py-5 hover:text-gray-700 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Meeting</a>
              <a href="#" className="py-5 hover:text-gray-700 font-medium border-b-3 border-transparent hover:border-white transition duration-300 ms-12">Resort Map</a>
              <a href="#" className="py-5 hover:text-gray-700 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Curated Journeys</a>
              <a href="#" className="py-5 hover:text-gray-700 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Access</a>
            </div>
          </div>

     
          <div className="hidden md:block border-b py-5 px-4 border-white">
            <a href="#" className="font-medium text-white hover:text-gray-600">
              Reserve
            </a>
          </div>

         
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-4xl text-white"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

      
        {isOpen && (
          <div className="px-6 pb-3 md:hidden text-white space-y-3 bg-black/80 shadow-md">
            <a href="#" className="block hover:text-green-400 font-medium">
              Dining
            </a>
            <a href="#" className="block hover:text-green-400 font-medium">
              spa
            </a>
            <a href="#" className="block hover:text-green-400 font-medium">
              weeding
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
