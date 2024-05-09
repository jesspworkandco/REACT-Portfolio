import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { projectsData } from "../../data/projectsData";
import "./projects.css";

const Projects = () => {
  const [projectsList, setProjectsList] = useState(projectsData);
  const viewWebsite = "View Website";
  const downloadApp = "Download App";
  useEffect(() => {
    setProjectsList(projectsList);
  }, [projectsList]);
  return (
    <div className="projects-container">
      <div className="short-about">
        <p className="name">
          Bonjour, I am Jessica Perez, Software Developer at
          <a
            title="go visit workco website"
            className="workco"
            href="https://work.co/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            Work&Co.
          </a>
        </p>
        <p className="short-bio">
          Focused on creating user friendly applications with sleek designs,
          while writing clean code.
        </p>
      </div>
      <div className="main">
        <h1>Projects</h1>
        <Row className="project-row">
          {projectsData.map((project) => (
            <Col className="projects-col" sm={6} key={project.id}>
              <div className="container-image">
                <h4>{project.title}</h4>
                <Card.Img
                  src={project.image}
                  className="image"
                  variant="top"
                  alt="project illustrative image"
                />
                <div className="overlay">
                  <div className="link-site">
                    <Card.Text className="info-container">
                      <p className="project-description">
                        {project.description}
                      </p>
                      <p className="technology">{project.technologies}</p>
                    </Card.Text>

                    {/* <a
                      title="go to the app website"
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    > */}
                    {project.isWebsite ? (
                      <a
                        title="go to the app website"
                        href={project.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <button className="project-link">{viewWebsite}</button>
                      </a>
                    ) : (
                      <a
                        title="go to the app website"
                        href={project.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <button className="project-link">{downloadApp}</button>
                      </a>
                    )}

                    {project.github && (
                      <a
                        title="go to the github project repository"
                        href={project.github}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <button className="project-github">View Code</button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <h3 className="github my-3">
          See more on my{" "}
          <a
            title="go visit jessica perez github page"
            className="github-link"
            href="https://github.com/JessicaPerez1"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub!{" "}
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Projects;
