import React from "react";
import AchieveCard from "./AchieveCard";

const Achievements = () => {
  return (
    <div className="py-12 font-titleFont gap-4 flex flex-col text-center">
      <h2 className="text-2xl font-bold mb-8">Achievements & Certifications</h2>
      <div className="flex justify-center items-center py-8">
        <div className="w-full max-w-[1200px]">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
            <AchieveCard
              title={`Microsoft Azure AI-102`}
              subTitle={`Azure AI Engineer Associate`}
              score={`Certified`}
              des={`Validates expertise in designing and implementing AI solutions using Azure. Covers topics like natural language processing and computer vision.`}
            />
            <AchieveCard
              title={`Microsoft Azure DP-100`}
              subTitle={`Azure Data Scientist Associate`}
              score={`Certified`}
              des={`Demonstrates skills in using Azure to build and deploy data science solutions. Focuses on data analysis and machine learning.`}
            />
            <AchieveCard
              title={`Microsoft Azure AI-900`}
              subTitle={`Artificial Intelligence Fundamentals`}
              score={`Certified`}
              des={`Provides foundational knowledge of AI and machine learning concepts on Azure. Ideal for those starting with AI technologies.`}
            />
            <AchieveCard
              title={`Microsoft Azure DP-900`}
              subTitle={`Data Fundamentals`}
              score={`Certified`}
              des={`Covers core data concepts and their implementation using Azure services. Focuses on relational and non-relational data storage.`}
            />
            <AchieveCard
              title={`Joy of Computing with Python`}
              subTitle={`NPTEL`}
              score={`91%`}
              des={`Achieved top 2% rank in this Python programming course. Demonstrates advanced proficiency in computational thinking and problem-solving with Python.`}
            />
            <AchieveCard
              title={`Programming in Java`}
              subTitle={`NPTEL`}
              score={`84%`}
              des={`Secured a top 5% position in the Java programming course. Highlights strong skills in object-oriented programming and Java language fundamentals.`}
            />
            <AchieveCard
              title={`Programming in C`}
              subTitle={`NPTEL`}
              score={`81%`}
              des={`Gained certification in basic C programming. Focuses on fundamental programming concepts and problem-solving skills using C.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
