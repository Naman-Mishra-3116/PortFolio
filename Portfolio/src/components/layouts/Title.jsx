import React from "react";

const Title = ({ title, desc }) => {
  return (
    <div className="flex flex-col gap-4 py-5 font-titleFont mb-10">
      <h3 className="text-sm uppercase font-light text-designColor tracking-wide">
        {title}
      </h3>
      <h1 className="text-4xl text-gray-300 font-bold capitalize">{desc}</h1>
    </div>
  );
};
export default Title;
