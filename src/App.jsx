import React from "react";
const handelButton = () =>{
  console.log("button clicked");
  
}
export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-500 mb-4">
        Tailwind is working!
      </h1>
      <p className="text-gray-700 text-lg">
        This is a starter React + Vite + Tailwind app.
      </p>
      <button onClick={handelButton}
      className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Click Me
      </button> 
    </div>
  );
}
