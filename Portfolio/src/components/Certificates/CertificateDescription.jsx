import React from "react";

const CertificateDescription = ({ score, subTitle, title, des }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-6 shadow-shadowOne text-left">
      <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:gap-4 lgl:items-center">
        <div>
          <h3 className="text-base md:text-lg font-semibold group-hover:text-white duration-300">
            {title}
          </h3>
          <p className="text-xs md:text-sm mt-1 text-gray-400 group-hover:text-white duration-300">
            {subTitle}
          </p>
        </div>
        <div>
          <p className="px-3 py-1 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-xs md:text-sm font-medium">
            {score}
          </p>
        </div>
      </div>
      <p className="text-xs md:text-sm font-medium text-gray-400 group-hover:text-gray-300 duration-300 mt-4 lgl:mt-6">
        {des}
      </p>
    </div>
  );
};

export default CertificateDescription;
