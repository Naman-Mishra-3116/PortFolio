import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Icon from "./Icon";
import {
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiMongodb,
  SiMicrosoftazure,
  SiGmail,
  SiExpress,
} from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
    loop: true,
    typeSpeed: 20,
    delaySpeed: 2000,
    deleteSpeed: 10,
  });
  return (
    <div className="w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm
          <span className="text-designColor capitalize ml-2">Naman Mishra</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As a full-stack web developer, I build responsive and user-friendly
          web applications. With expertise in both front-end and back-end
          development, I create seamless digital experiences that are both
          functional and visually appealing. My goal is to deliver high-quality
          solutions that meet the needs of users and clients alike.
        </p>
      </div>
      <div className="flex justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            find me on
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <a href="https://github.com/Naman-Mishra-3116">
              {" "}
              <Icon Icon={FaGithub} />
            </a>
            <a href="https://www.linkedin.com/in/naman-mishra-082555265/">
              <Icon Icon={FaLinkedin} />
            </a>
            <a href="https://x.com/mishr89057">
              <Icon Icon={FaTwitter} />
            </a>
            {/* <a href="">
              <Icon Icon={SiGmail} />
            </a> */}
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=namanmishra3116@gmail.com">
              <Icon Icon={SiGmail} />
            </a>
          </div>
        </div>
        <div className="mr-[60px]">
          <h2 className="text-base uppercase font-titleFont mb-4">Skills</h2>
          <div className="grid grid-cols-3 gap-4">
            <Icon Icon={SiJavascript} />
            <Icon Icon={SiExpress} />
            <Icon Icon={SiReact} />
            <Icon Icon={SiMongodb} />
            <Icon Icon={SiTailwindcss} />
            <Icon Icon={SiMicrosoftazure} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
