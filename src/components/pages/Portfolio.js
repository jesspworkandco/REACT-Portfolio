import React from "react";
import "./portfolio.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Portfolio() {
  return (
    <div className="portfolio-title mx-sm-4 text-center">
      <h1>
        <span className="portfolio">PORTFOLIO</span>
        <span className="gallery">GALLERY</span>
      </h1>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Project Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Portfolio;
