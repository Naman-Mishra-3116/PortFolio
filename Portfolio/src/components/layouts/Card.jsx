import React from "react";
import { HiArrowRight } from "react-icons/hi";
const Card = ({ Icon, title, description }) => {
  return (
    <div className="h-80 w-full px-12 py-12 rounded-lg shadow-shadowOne flex group items-center bg-gradient-to-r from-bodycolor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100">
      <div className="h-72 overflow-y-hidden">
        <div className="flex flex-col gap-7 h-full translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
          <div>
            <span className="text-3xl text-designColor">
              <Icon />
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="text-xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="base">{description}</p>
            <span className="text-2xl text-designColor">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
