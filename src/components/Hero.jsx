import React from "react";

function Hero() {
  return (
    <>
      <section
        className="h-[110vh] flex flex-col items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/bg.webp')" }}
      >
        <span
          className="text-lg mb-6 cursor-pointer tracking-wide inline-block 
                 transition-all duration-500 
                 hover:text-black hover:scale-110 hover:animate-pulse"
        >
          AYANA BALI
        </span>

        <h1 className="font-playfair text-6xl py-4 text-white animate-glow animate-float  font-serif ">
          RESORT
        </h1>

        <p className="text-xl    mt-4 text-gray-200 mb-12  cursor-pointer">
          A Serene Escape by the Sea
        </p>

        <button
          className="bg-gray-700 text-white px-6 py-3 rounded font-semibold 
                   shadow-md transform transition-all duration-300 
                   hover:text-black hover:bg-yellow-50 hover:scale-105  hover:shadow-xl"
        >
          Reserve AYANA Resort
        </button>
      </section>
    </>
  );
}

export default Hero;
