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
      <Col xs={10} className="column mx-auto px-auto">
        <div className="portfolio-title mx-sm-4 text-center">
          <h1>
            <span className="portfolio">PORTFOLIO</span>
            <span className="gallery">GALLERY</span>
          </h1>

          <div className="card-group">
            <Row>
              {this.state.projects.map((project) => (
                <Col sm={10} md={6} lg={4}>
                  <Card className="card" key={project.id}>
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
                      <Card.Title className="project-title">
                        {project.title}
                      </Card.Title>
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
