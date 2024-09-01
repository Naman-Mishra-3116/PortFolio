import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { projectOne, projectThree, projectTwo } from "../../assets/images";
const Projects = () => {
  return (
    <section className="h-screen  mt-10" id="projects">
      <Title title={"VISIT MY PROJECTS"} desc={"My Projects"} />
      <div className="grid grid-cols-3 gap-20">
        <ProjectCard
          title={`TypingTest`}
          desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellendus officiis eaque? Doloremque in eius provident non molestiae animi quia?`}
          src={projectOne}
        />
        <ProjectCard
          title={`Online Doctor Clinic`}
          desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellendus officiis eaque? Doloremque in eius provident non molestiae animi quia?`}
          src={projectTwo}
        />
        <ProjectCard
          title={`Speechify React`}
          desc={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repellendus officiis eaque? Doloremque in eius provident non molestiae animi quia?`}
          src={projectThree}
        />
      </div>
      <p></p>
    </section>
  );
};

export default Projects;
