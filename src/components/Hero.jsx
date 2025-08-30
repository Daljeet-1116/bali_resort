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



      {/* section 2 */}



<section
        className="h-[220vh] flex flex-col items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/bg2.webp')" }}
      >
        <div className="text-center group cursor-pointer">
          <span className="text-lg mb-6 block transition-transform duration-300 group-hover:scale-105 group-hover:text-yellow-400">
            AYANA BALI
          </span>
          <h1 className="text-6xl font-bold mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:text-pink-500">
            RESORT
          </h1>
          <p className="text-xl mt-4 text-gray-200 mb-12 transition-transform duration-300 group-hover:scale-105 group-hover:text-green-300">
            A Serene Escape by the Sea
          </p>
          <div className="max-w-5xl mx-auto text-xl mt-4">
            <p className=" max-w-5xl px-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              similique tenetur unde quam maxime, esse doloremque nulla deleniti
              nam quo maiores cumque modi vero, numquam voluptatum suscipit?
              Veritatis, eum possimus? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Enim similique tenetur unde quam maxime, esse
             
            </p>

       
            <img
              src="/images/map.png"
              alt="Resort"
              className="mt-6 max-w-2xl mx-auto rounded-lg "
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
