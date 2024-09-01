import React from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievements from "./Achievements";
import { useState } from "react";

const Resume = () => {
  const [show, setShow] = useState("education");
  const handleChangeTab = (item) => {
    setShow(item);
  };
  return (
    <div id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <Title
        desc={"My Resume"}
        title={"Experience, Skills, Innovation & Success"}
      />
      <div>
        <ul className="w-[60%] ml-auto mr-auto grid grid-cols-3">
          <li
            onClick={() => handleChangeTab("education")}
            className={`resumeLi ${
              show === "education"
                ? "border-designColor border-solid border-1 rounded-lg"
                : ""
            }`}
          >
            Education
          </li>
          <li
            onClick={() => handleChangeTab("skills")}
            className={`resumeLi ${
              show === "skills" ? "border-designColor border-solid border-1 rounded-lg" : ""
            }`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => handleChangeTab("achievements")}
            className={`resumeLi ${
              show === "achievements"
                ? "border-designColor border-solid border-1 rounded-lg"
                : ""
            }`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {show === "education" ? <Education /> : null}
      {show === "skills" ? <Skills /> : null}
      {show === "achievements" ? <Achievements /> : null}
    </div>
  );
};

export default Resume;
