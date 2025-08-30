import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-full fixed top-2 left-0  z-50 transition-all duration-300">
        <div className="max-w-8xl mx-auto px-6 flex justify-between items-center h-16">
         

          <div className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Logo" className="w-20 h-16 mt-4 " />
           
          </div>

          <div className="hidden md:flex flex-1 justify-center items-center">
            <div className="flex space-x-10 text-white hover:text-gray-600 border-white border-b-1">
                 <span className="font-medium py-3 pe-24  ">BALI</span>
              <a href="#"className="text-white pt-3 py-5  hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Hotles</a>
              <a href="#"className="text-white pt-3 py-5  hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Dining</a>
              <a href="#"className="text-white pt-3 py-5  hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Spa</a>
              <a href="#"className="text-white pt-3 py-5  hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Experiences</a>
              <a href="#"className="text-white pt-3 py-5  hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Weeding</a>
              <a href="#"className="text-white pt-3 py-5  hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Meeting</a>
              <a href="#"className="text-white pt-3 hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300 ms-12">Resort Map</a>
              <a href="#"className="text-white pt-3 py-5  hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Curated Journeys</a>
              <a href="#"className="text-white pt-3 py-5  hover:text-gray-600 font-medium border-b-3 border-transparent hover:border-white transition duration-300">Access</a>

            </div>
          </div>









          {/* Desktop Sign in */}
          <div className="hidden md:block border-b-1 py-4 px-4 border-white">
            <a href="#" className="font-medium text-white hover:text-gray-600 ">
              Reserve
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white">
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="px-6 pb-3 md:hidden space-y-3 bg-white shadow-md">
            <a
              href="#"
              className="block text-gray-800 hover:text-red-500 font-medium"
            >
              Business Directory
            </a>
            <a
              href="#"
              className="block text-gray-800 hover:text-red-500 font-medium"
            >
              Market Place
            </a>

            <a
              href="#"
              className="block text-gray-800 hover:text-red-500 font-medium"
            >
              Sign in
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
