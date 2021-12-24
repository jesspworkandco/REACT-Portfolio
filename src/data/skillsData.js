import React from "react";
import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiTypescript,
  SiStorybook,
  SiFigma,
  SiGraphql,
  SiJest,
  SiJirasoftware,
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { FaGit, FaNodeJs } from "react-icons/fa";

export const frontendSkills = [
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
export const backendSkills = [
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

export const otherSkills = [
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
  {
    id: 4,
    title: "Jira",
    image: <SiJirasoftware className="icon" size={40} />,
  },
];
