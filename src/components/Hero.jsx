import React from "react";

function Hero() {
  return (
    <>
      <section
        className="h-[110vh] flex flex-col items-center justify-center bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/bg.webp')" }}
      >
        <div></div>
        <span
          className="text-lg mb-6 cursor-pointer tracking-wide inline-block 
                 transition-all duration-500 
                 hover:text-blue-500 hover:scale-110 hover:animate-pulse"
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
        className="min-h-screen py-[27rem] flex flex-col items-center justify-center bg-cover bg-center text-white px-4"
        style={{ backgroundImage: "url('/images/bg2.webp')" }}
      >
        <div className="text-center group cursor-pointer w-full max-w-6xl ">
          <span className="text-base  sm:text-lg mb-4 block transition-transform duration-300 group-hover:scale-105 group-hover:text-yellow-400">
            AYANA BALI
          </span>

          <h1 className="text-4xl py-4 sm:text-6xl font-bold mb-3 transition-transform duration-300 group-hover:scale-105 group-hover:text-pink-500">
            RESORT
          </h1>

          <p className="text-lg sm:text-xl mt-3 text-gray-200 mb-8 transition-transform duration-300 group-hover:scale-105 group-hover:text-green-300">
            A Serene Escape by the Sea
          </p>

          <div className="max-w-5xl mx-auto text-base sm:text-xl mt-3 py-10">
            <p className="px-2 sm:px-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              similique tenetur unde quam maxime, esse doloremque nulla deleniti
              nam quo maiores cumque modi vero, numquam voluptatum suscipit?
              Veritatis, eum possimus? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Enim similique tenetur unde quam maxime, esse...
            </p>

            <img
              src="/images/map.png"
              alt="Resort"
              className="mt-6 w-full sm:max-w-2xl mx-auto rounded-lg object-cover h-64 md:h-80"
            />
          </div>
        </div>
      </section>

      {/* section 3 */}

      <section className="m-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-21 py-18">
          <div className=" h-[290px] text-white">
            <div className="">
              <img
                src="/images/a.webp"
                alt="Imvabvknrbks;b"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
          </div>
          <div className=" p-6 border-b-2 border-b-black h-[290px] pt-22 ">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Swimming</h2>
            <p className="text-gray-700 mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-700">
              Curabitur vel urna at lacus pharetra placerat.
            </p>
          </div>

          <div className=" p-6 border-b-2 border-b-black h-[290px] pt-22 ">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Spa</h2>
            <p className="text-gray-700 mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-700">
              Curabitur vel urna at lacus pharetra placerat.
            </p>
          </div>

          <div className=" h-[290px] text-white">
            <div className="">
              <img
                src="/images/c.webp"
                alt="Imvabvknrbks;b"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className=" h-[290px] text-white">
            <div className="">
              <img
                src="/images/b.webp"
                alt="Imvabvknrbks;b"
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className=" p-6 border-b-2 border-b-black h-[290px] pt-22 ">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Massage</h2>
            <p className="text-gray-700 mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-700">
              Curabitur vel urna at lacus pharetra placerat.
            </p>
          </div>

          <div className=" p-6 border-b-2 border-b-black h-[290px] pt-22 ">
            <h2 className="text-xl md:text-2xl font-bold mb-2">Weeding</h2>
            <p className="text-gray-700 mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-700">
              Curabitur vel urna at lacus pharetra placerat.
            </p>
          </div>

          <div className=" h-[290px] text-white">
            <div className="">
              <img
                src="/images/image.png"
                alt="Imvabvknrbks;b"
                className="w-full h-64 top-0 cover md:h-80 object-cover  rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
