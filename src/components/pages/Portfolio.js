import React from "react";
import "./portfolio.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projects from "../../projects.json";

class Portfolio extends React.Component {
  state = {
    projects: projects,
    // isMouseInside: false,
  };
  // mouseEnter = () => {
  //   this.setState({ isMouseInside: true });
  // };
  // mouseLeave = () => {
  //   this.setState({ isMouseInside: false });
  // };
  render() {
    return (
      <>
        <Col xs={8} sm={10} className="column mx-auto">
          <div className="portfolio-title mx-sm-4 text-center">
            <div>
              <h1>
                <span className="projects">My Projects</span>
              </h1>
            </div>
            <div className="card-group">
              <Row>
                {this.state.projects.map((project) => (
                  <Col className="projects-col" sm={10} xl={6} key={project.id}>
                    <Card className="card">
                      <Row>
                        <Col className="image-col" sm={12} xl={6}>
                          {/* <span
                        onMouseEnter={this.mouseEnter}
                        onMouseLeave={this.mouseLeave}
                      >
                        {this.state.isMouseInside ? (
                          <>
                            <button> */}
                          {/* <a
                                href={project.link}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                View Site
                              </a>
                            </button> */}

                          {/* <button>
                              <a
                                href={project.link}
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                {" "}
                                View Code
                              </a>
                            </button>
                          </>
                        ) : null} */}
                          {/* <a
                        href={project.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      > */}
                          <Card.Img
                            src={project.image}
                            className="image"
                            variant="top"
                            alt="project image"
                          />
                          {/* </span> */}
                          {/* </a> */}
                        </Col>
                        <Col sm={12} xl={6}>
                          <Card.Body>
                            {/* <a
                          href={project.github}
                          rel="noopener noreferrer"
                          target="_blank"
                        > */}
                            <Card.Title className="project-title">
                              {project.title}
                            </Card.Title>
                            {/* </a> */}
                            <p className="technology">{project.technologies}</p>
                            <Card.Text>{project.description}</Card.Text>
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
