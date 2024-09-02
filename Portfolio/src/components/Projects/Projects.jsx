import React from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { projects } from "../../constants/projectData";
const Projects = () => {
  return (
    <section className="h-auto mb-4  mt-10" id="projects">
      <div className="text-center">
        <Title title={"VISIT MY PROJECTS"} desc={"My Projects"} />
      </div>
      <div className="grid grid-cols-3 gap-20">
        {projects.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              title={item.title}
              desc={item.desc}
              src={item.image}
              live={item.liveLink}
              team={item.teamSize}
              duration={item.duration}
            />
          );
        })}
      </div>
      <p></p>
    </section>
  );
};

export default Projects;
