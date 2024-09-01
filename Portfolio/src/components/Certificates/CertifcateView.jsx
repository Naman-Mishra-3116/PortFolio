import React, { useState } from "react";
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from "../layouts/Title";
import CertificateSlider from "./CertificateSlider";
import { certificateData } from "../../constants/certificateData";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 mt-5 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute -bottom-2 right-2 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute -bottom-2 mt-5 left-2 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const CertificateView = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "8px",
          padding: "8px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <section id="testimonial" className="w-full h-screen">
      <div className="flex justify-center items-center text-center">
        <Title title="Awards & Achievements" desc="Certifications" />
      </div>
      <div className="relative max-w-6xl mx-auto">
        <Slider {...settings}>
          {certificateData.map((item, index) => {
            return (
              <CertificateSlider
                certificate={item.image}
                title={item.title}
                subTitle={item.subTitle}
                score={item.score}
                des={item.des}
                key={index}
              />
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default CertificateView;
