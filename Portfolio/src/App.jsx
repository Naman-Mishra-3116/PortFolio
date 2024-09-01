import Banner from "./components/banner/Banner";
import Navbar from "./components/navBar/Navbar";
import Features from "./components/Features/Features";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import React from "react";
import CertificateView from "./components/Certificates/CertifcateView";
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <Navbar />

      <div className="max-w-screen-2xl h-full mx-auto px-16">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <CertificateView />
      </div>
    </div>
  );
}

export default App;
