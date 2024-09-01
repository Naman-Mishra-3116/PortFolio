import Banner from "./components/banner/Banner";
import Navbar from "./components/navBar/Navbar";
import Features from "./components/Features/Features";
import React from "react";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Banner />
        <Features />
      </div>
    </div>
  );
}

export default App;
