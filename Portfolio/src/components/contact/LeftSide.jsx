import React from "react";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Icon from "../banner/Icon";

const LeftSide = () => {
  return (
    <div className="w-[60%] ml-auto mb-10 mr-auto h-full p-6 lgl:p-10 text-center flex flex-col gap-8 justify-center  bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne">
      <div className="flex flex-col gap-2 items-center">
        <h3 className="text-xl font-semibold text-white">Naman Mishra</h3>
        <p className="text-md text-gray-300">
          Phone: <span className="text-lightText">+919479988886</span>
        </p>
        <p className="text-md text-gray-300">
          Email:{" "}
          <span className="text-lightText">namanmishra3116@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <h2 className="text-md uppercase font-semibold text-gray-200 mb-1">
          Find me on
        </h2>
        <div className="flex gap-6">
          <a href="https://x.com/mishr89057">
            <Icon Icon={FaTwitter} />
          </a>
          <a href="https://www.linkedin.com/in/naman-mishra-082555265">
            <Icon Icon={FaLinkedinIn} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
