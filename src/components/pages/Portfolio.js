import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projects from "../../projects.json";
import "./portfolio.css";

class Portfolio extends React.Component {
  state = {
    projects: projects,
  };
  render() {
    return (
      <div className="portfolio">
        <Col className="main-col" xs={10}>
          <div className="main mx-sm-4 text-center">
            <h1>Work and Projects</h1>
            <div className="card-group">
              <Row>
                {this.state.projects.map((project) => (
                  <Col className="projects-col" sm={12} key={project.id}>
                    <Card className="card">
                      <Row>
                        <Col className="image-col" sm={12} xl={4}>
                          <div className="container-image p-0">
                            <Card.Img
                              src={project.image}
                              className="image"
                              variant="top"
                              alt="project illustrative image"
                            />
                            <div className="link-site">
                              <a
                                title="go to the app website"
                                href={project.link}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                {" "}
                                <button className="project-link">
                                  View Site
                                </button>
                              </a>
                              {project.github && (
                                <a
                                  title="go to the github project repository"
                                  href={project.github}
                                  rel="noopener noreferrer"
                                  target="_blank"
                                >
                                  <button className="project-github">
                                    View Code
                                  </button>
                                </a>
                              )}
                            </div>
                          </div>
                        </Col>
                        <Col className="project-description-col" sm={12} xl={8}>
                          <Card.Body className="card-body">
                            <Card.Title className="project-title mb-0 mt-sm-2">
                              {project.title}
                            </Card.Title>
                            <p className="technology">{project.technologies}</p>
                            <Card.Text className="project-description">
                              {project.description}
                            </Card.Text>
                          </Card.Body>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
            <h3 className="github my-2">
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
        </Col>
      </div>
    );
  }
}
export default Portfolio;
