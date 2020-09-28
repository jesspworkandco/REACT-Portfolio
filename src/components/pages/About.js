import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import "./about.css";

function About() {
  return (
    <Col xs={12} className="column mt-3">
      <Jumbotron fluid className="jumbo px-3 text-center">
        <h1>
          <span className="first">JESSICA</span>
          <span className="last">PEREZ</span>
        </h1>
        <h4 className="contact mt-3">
          NEW YORK, NY 10010 || <span className="cell">(917) 847-1533</span> ||
          <a id="email" href="mailto:1jessicaperez@gmail.com">
            1JESSICAPEREZ@GMAIL.COM
          </a>
        </h4>
        <p className="bio mt-4">
          I am a Full Stack Web Developer, aiming to combine my marketing
          background with my education from Columbia University’s Full Stack web
          development Bootcamp. My skillset and experience, put me at the
          forefront to join a web development team tasked to accomplish
          strategic launches of innovative user friendly apps. A recent
          portfolio will show personal and team projects. I’ve set sail my own
          segue from France to the USA, and more recently from marketing, with
          goals to accomplish this transition towards becoming an accomplished
          Software Engineer.
        </p>
      </Jumbotron>
    </Col>
  );
}

export default About;
