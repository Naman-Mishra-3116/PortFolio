import React from "react";
import ResumeCard from "./ResumeCard";
import {  motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <div className="py-12 font-titleFont gap-4 flex flex-col text-center">
        <p className="text-sm text-designColor tracking-[4px]">
          2018 - {new Date().getFullYear()}
        </p>
        <h2 className="text-2xl font-bold">Educational Qualification</h2>
      </div>
      <div className="flex justify-between">
        <div className="mt-6 w-full h-auto border-l-[6px] border-black border-opacity-25 flex flex-col gap-10">
          <ResumeCard
            title={`B.Tech in CSE (AI & ML)`}
            subTitle={`Shri Vaishnav Vidyapeeth Vishwavidyalaya`}
            duration={`2021 - 2025`}
            des={`Pursuing B.Tech in Computer Science & Engineering at Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore, MP, with a strong focus on web development and software engineering`}
          />
          <ResumeCard
            title={`12th Grade`}
            subTitle={`Pink Flower Higher Secondary School`}
            duration={`2020 - 2021`}
            des={`Achieved 90.6% in the 12th Grade with a focus on PCM, reflecting a solid grasp of core subjects under MPBSE`}
          />
        </div>
        <div className="mt-6 w-full h-auto self-start border-l-[6px] border-black border-opacity-25 flex flex-col gap-10">
          <ResumeCard
            title={`10th Grade`}
            subTitle={`Pink Flower Higher Secondary School`}
            duration={`2018 - 2019`}
            des={`Secured 90.2% in the 10th Grade, demonstrating a strong academic foundation under MPBSE.`}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
