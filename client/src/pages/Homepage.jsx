import React from "react";
import MainSection from "../components/MainSection";
import NavBar from "../components/Navbar";
import SearchBar from "../components/SearchBar";

const Homepage = () => {
  return (
    <div className="text-3xl font-bold underline bg-red-400">
      <NavBar />
      <MainSection />
      <SearchBar />
    </div>
  );
};

export default Homepage;
