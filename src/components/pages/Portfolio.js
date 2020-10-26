import React from "react";
import "./portfolio.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projects from "../../projects.json";

class Portfolio extends React.Component {
  state = {
    projects: projects,
  };
  render() {
    return (
      <>
        <Col xs={8} sm={10} className="main-column mx-auto">
          <div className="portfolio-title mx-sm-4 text-center">
            <div>
              <h1>My Projects</h1>
            </div>
            <div className="card-group">
              <Row>
                {this.state.projects.map((project) => (
                  <Col className="projects-col" sm={10} xl={6} key={project.id}>
                    <Card className="card">
                      <Row>
                        <Col className="image-col" sm={12} xl={6}>
                          <div className="container">
                            <Card.Img
                              src={project.image}
                              className="image"
                              variant="top"
                              alt="project image"
                            />
                            <div className="link-site">
                              <a
                                href={project.link}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                {" "}
                                <button className="project-link">
                                  View Site
                                </button>
                              </a>
                              <a
                                href={project.github}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <button className="project-github">
                                  View Code
                                </button>
                              </a>
                            </div>
                          </div>
                        </Col>
                        <Col className="project-description-col" sm={12} xl={6}>
                          <Card.Body>
                            <Card.Title className="project-title">
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
          </div>
        </Col>
      </>
    );
  }
}
export default Portfolio;
