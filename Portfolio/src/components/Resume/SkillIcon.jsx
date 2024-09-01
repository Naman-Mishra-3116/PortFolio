import React from "react";

const SkillIcon = ({ icon, name }) => {
  const Icon = icon;
  return (
    <div className="flex items-center justify-between w-full max-w-[300px] px-4 py-6 bg-black bg-opacity-30 transition duration-300 shadow-shadowOne rounded-lg group hover:bg-[#0b1e34] hover:bg-opacity-70">
      <div className="text-2xl text-white transition duration-300 group-hover:text-designColor">
        <Icon />
      </div>
      <p className="text-base mr-2 font-titleFont font-semibold text-gray-300 transition duration-300 group-hover:text-white">
        {name}
      </p>
    </div>
  );
};

export default SkillIcon;
