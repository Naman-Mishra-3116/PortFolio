import React from "react";
import Title from "../layouts/Title";
import LeftSide from "./LeftSide";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full mt-[200px] border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Get In Touch" desc="Contact Me" />
      </div>
      <div className="w-full -mt-5">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <LeftSide />
        </div>
      </div>
    </section>
  );
};

export default Contact;
