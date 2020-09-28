import React from "react";
import "./portfolio.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projects from "../../../src/projects.json";

class Portfolio extends React.Component {
  state = {
    projects: projects,
  };

  render() {
    return (
      <Col xs={10} className="column mx-auto">
        <div className="portfolio-title mx-sm-4 text-center">
          <div>
            <h1>
              <span className="portfolio">PORTFOLIO</span>
              <span className="gallery">GALLERY</span>
            </h1>
            <p className="subtitle">
              Click the image and start exploring some of my personal and group
              projects!
            </p>
          </div>
          <div className="card-group mx-auto">
            <Row>
              {this.state.projects.map((project) => (
                <Col sm={12} md={6} lg={4} key={project.id}>
                  <Card className="card">
                    <a
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Card.Img
                        src={project.image}
                        className="image"
                        variant="top"
                        alt="project image"
                      />
                    </a>
                    <Card.Body>
                      <a
                        href={project.github}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Card.Title>
                          {project.title}
                          <div className="tooltip">
                            <span className="tooltiptext">GitHub Link</span>
                          </div>
                        </Card.Title>
                      </a>
                      <Card.Text>{project.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Col>
    );
  }
}
export default Portfolio;
