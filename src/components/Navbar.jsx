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
    <nav
      className={`w-full fixed  left-0 z-50 transition-all duration-500
         ${scrolled ? "bg-black/60 backdrop-blur-md shadow-md": "bg-transparent"}`} >

      <div className="max-w-8xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="flex items-center space-x-1 pt-4 p-2 ">
          <img src="/images/logo.png" alt="Logo" className="w-26 h-28" />
        </div>

  
        <div className="hidden md:flex flex-1 justify-center items-center"> 
            <div className="flex space-x-10 text-white hover:text-gray-600 border-white border-b-1  transition duration-300">
                 <span className="font-medium py-3 pe-24   ">BALI</span>
                  <a href="#"className="text-white pt-3 py-5 hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Hotles</a>
                   <a href="#"className="text-white pt-3 py-5 hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Dining</a>
                    <a href="#"className="text-white pt-3 py-5 hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Spa</a> 
                    <a href="#"className="text-white pt-3 py-5 hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Experiences</a>
                     <a href="#"className="text-white pt-3 py-5 hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Weeding</a>
                      <a href="#"className="text-white pt-3 py-5 hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Meeting</a> 
                      <a href="#"className="text-white pt-3 hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300 ms-12">Resort Map</a> 
                      <a href="#"className="text-white pt-3 py-5 hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Curated Journeys</a>
                       <a href="#"className="text-white pt-3 py-5 hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Access</a>
                        </div>
                        </div>

       
        <div className="hidden md:block border-b-1 py-4 px-4 border-white">
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
        <div className="ms-20 px-6 p-3 md:hidden text-white space-y-3 backdrop-blur-lg bg-black/80 shadow-md rounded-2xl">
          <a href="#" className="block hover:text-red-400">Hotels</a>
          <a href="#" className="block hover:text-red-400">Dining</a>
          <a href="#" className="block hover:text-red-400">Spa</a>
          <a href="#" className="block hover:text-red-400">Experiences</a>
          <a href="#" className="block hover:text-red-400">Wedding</a>
          <a href="#" className="block hover:text-red-400">Meeting</a>
          <a href="#" className="block hover:text-red-400">Resort Map</a>
          <a href="#" className="block hover:text-red-400">Curated Journeys</a>
          <a href="#" className="block hover:text-red-400">Access</a>
        </div>
      )}
    </nav>
  );
}
