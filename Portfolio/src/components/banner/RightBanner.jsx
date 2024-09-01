import React from "react";
import bannerImg from "../../assets/black.jpg";

const RightBanner = () => {
  return (
    <div className="relative w-1/2 flex justify-center items-center">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[500px] h-[560px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center rounded-md"></div>
      </div>
      <img
        src={bannerImg}
        alt="banner image"
        className="w-[380px] h-[440px] rounded-md z-10 shadow-lg opacity-60"
      />
    </div>
  );
};

export default RightBanner;
