import React from "react";
import Row from "react-bootstrap/Row";
import {
  frontendSkills,
  backendSkills,
  otherSkills,
} from "../../data/skillsData";

import "./skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
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
