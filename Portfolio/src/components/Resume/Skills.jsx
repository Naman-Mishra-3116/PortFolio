import React from "react";
import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";
import { FaJs, FaNode, FaReact } from "react-icons/fa";
import {
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";
import { GrJava } from "react-icons/gr";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="flex w-[80%] gap-28 justify-center ml-auto mr-auto py-12  items-center">
        <div className="w-[40%]">
          <div className="py-12 font-titleFont mb-4 text-center">
            <h2 className="text-2xl md:text-md font-bold">Core Technologies</h2>
          </div>
          <div className='className="mt-14 w-full grid grid-cols-2 gap-6'>
            <SkillIcon icon={FaJs} name={"Javascript"} />
            <SkillIcon icon={GrJava} name={"Java"} />
            <SkillIcon icon={SiPostgresql} name={"Postgres"} />
            <SkillIcon icon={SiMongodb} name={"MongoDB"} />
          </div>
        </div>

        <div className="w-[40%] mr-10">
          <div className="py-12 font-titleFont mb-4 text-center">
            <h2 className="text-2xl md:text-md font-bold">
              Libraries & Frameworks
            </h2>
          </div>
          <div className=" grid grid-cols-2 gap-6 self-start">
            <SkillIcon icon={SiTailwindcss} name={"Tailwind"} />
            <SkillIcon icon={FaNode} name={"Node JS"} />
            <SkillIcon icon={SiExpress} name={"Express Js"} />
            <SkillIcon icon={FaReact} name={"React JS"} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
