import React from "react";
import hero from "../images/hero.jpg";

const MainSection = () => {
  return (
    <div className="h-screen bg-black">
      <div className="border-white border-2  rounded-lg  h-4/6 mx-10 relative">
        <img src={hero} alt="hero-img" className="object-cover h-full w-full" />
        <div class="absolute  p-4 bottom-0  text-xs w-3/6 flex justify-center items-start flex-col h-full">
          <h2 className="mb-2 text-4xl text-white">
            Find Your Dream PG in a click
          </h2>
          <span className="text-xl mb-2">Find and get an experience</span>
          <button class="bg-blue hover:bg-black text-white font-bold py-2 px-4 border rounded">
            Start your Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
