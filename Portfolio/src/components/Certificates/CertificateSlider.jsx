import React from "react";
import CertificateDescription from "./CertificateDescription";

const CertificateSlider = ({ certificate, title, subTitle, score, des }) => {
  return (
    <div className="w-full mb-5">
      <div className="w-full h-auto flex flex-col lgl:flex-row justify-around">
        <div className="w-full lgl:w-[55%] h-full flex items-center justify-center">
          <div className="w-full h-[90%] py-12 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-8 flex items-center justify-center">
            <img
              className="h-96 md:h-48 lgl:h-96 rounded-lg object-cover"
              src={certificate}
              alt="Certificate Preview"
            />
          </div>
        </div>
        <div className="w-full self-center lgl:w-[35%] h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex  items-center justify-center">
          <CertificateDescription
            title={title}
            subTitle={subTitle}
            score={score}
            des={des}
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateSlider;
