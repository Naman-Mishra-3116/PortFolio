import React from "react";
import Title from "../layouts/Title";
import Card from "../layouts/Card";
import {
  FaServer,
  FaLaptopCode,
  FaPaintBrush,
  FaDatabase,
  FaNetworkWired,
} from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full h-full pt-10 pb-20 border-b-[1px] border-b-black font-titleFont"
    >
      <Title title={"Features"} desc={"What I do"} />
      <div className="grid grid-cols-3 gap-20">
        <Card
          Icon={FaServer}
          title={"Backend Devlopment"}
          description={`Building robust server-side solutions to power your applications. Expertise in managing databases, APIs, and server infrastructure to ensure smooth and efficient operations.`}
        />
        <Card
          Icon={FaLaptopCode}
          title={"Frontend Devlopment"}
          description={`Transforming designs into interactive, responsive web experiences. Specializing in modern frameworks and technologies to deliver seamless and engaging user interfaces.`}
        />

        <Card
          Icon={FaNetworkWired}
          title={"API Devlopment & Integration"}
          description={`Creating and integrating APIs for seamless functionality and smooth communication between your application and external services.`}
        />
        <Card
          Icon={FaDatabase}
          title={"Database Design & Management"}
          description={`Designing and managing robust databases to ensure efficient data storage and retrieval, tailored to the application's needs.`}
        />
        <Card
          Icon={SiMicrosoftazure}
          title={"Azure Cloud Management"}
          description={`Leveraging Azure Cloud to deploy and manage scalable, secure applications with ease. Benefit from a range of services including virtual machines, databases, and advanced analytics to meet your business needs.`}
        />
        <Card
          Icon={FaPaintBrush}
          title={"UI/UX Design"}
          description={`Crafting intuitive and visually appealing user interfaces with a focus on user experience. Combining aesthetics with functionality to create designs that resonate and engage.`}
        />
      </div>
    </section>
  );
};

export default Features;
