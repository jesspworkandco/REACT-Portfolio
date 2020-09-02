import React from "react";
import "./portfolio.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import projects from "../../../src/projects.json";

class Portfolio extends React.Component {
  state = {
    projects: projects,
  };

  render() {
    return (
      <div className="portfolio-title mx-sm-4 text-center">
        <h1>
          <span className="portfolio">PORTFOLIO</span>
          <span className="gallery">GALLERY</span>
        </h1>
        <div className="card-group">
          {this.state.projects.map((project) => (
            <Card className="card" key={project.id} style={{ width: "18rem" }}>
              <Card.Img
                className="screenshot"
                variant="top"
                src={project.screenshot}
                alt={project.title}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => `${project.link}`}
                ></Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}
export default Portfolio;
