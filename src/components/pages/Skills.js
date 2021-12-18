import React from "react";
import Row from "react-bootstrap/Row";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiTypescript,
  SiStorybook,
  SiFigma,
  SiGraphql,
  SiJest,
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { FaGit, FaNodeJs } from "react-icons/fa";
import "./skills.css";

const Skills = () => {
  const frontendSkills = [
    {
      id: 1,
      title: "Javascript",
      image: <SiJavascript className="icon" size={40} />,
    },
    {
      id: 2,
      title: "React/Native",
      image: <SiReact className="icon" size={40} />,
    },
    {
      id: 3,
      title: "Redux",
      image: <SiRedux className="icon" size={40} />,
    },
    {
      id: 4,
      title: "TypeScript",
      image: <SiTypescript className="icon" size={40} />,
    },
    {
      id: 5,
      title: "Bootstrap",
      image: <BsBootstrap className="icon" size={40} />,
    },
    {
      id: 6,
      title: "Storybook",
      image: <SiStorybook className="icon" size={40} />,
    },
  ];
  const backendSkills = [
    {
      id: 1,
      title: "NodeJS",
      image: <FaNodeJs className="icon" size={40} />,
    },
    {
      id: 2,
      title: "GraphQl",
      image: <SiGraphql className="icon" size={40} />,
    },
  ];

  const otherSkills = [
    {
      id: 1,
      title: "Git",
      image: <FaGit className="icon" size={40} />,
    },
    {
      id: 2,
      title: "Figma",
      image: <SiFigma className="icon" size={40} />,
    },
    {
      id: 3,
      title: "Jest",
      image: <SiJest className="icon" size={40} />,
    },
  ];
  return (
    <div className="skills">
      <div className="main mx-sm-4 text-center">
        <h1>Skills</h1>
        <h3 className="title"> Front-end </h3>
        <Row className="section">
          {frontendSkills.map((skill) => (
            <div>
              <div>{skill.image}</div>
              <h5> {skill.title}</h5>
            </div>
          ))}
        </Row>
        <h3 className="title"> Back-end </h3>
        <Row className="section">
          {backendSkills.map((skill) => (
            <div>
              <div>{skill.image}</div>
              <h5> {skill.title}</h5>
            </div>
          ))}
        </Row>
        <h3 className="title"> Other </h3>
        <Row className="section">
          {otherSkills.map((skill) => (
            <div>
              <div>{skill.image}</div>
              <h5> {skill.title}</h5>
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default Skills;
