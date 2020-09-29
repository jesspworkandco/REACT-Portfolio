import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Jpeg from "../../assets/me-nature.jpeg";
import "./home.css";

function Home() {
  return (
    <Container className="container mx-sm-auto px-3 text-center">
      <h3 className="links mt-5">
        <span className="first">JESSICA</span>
        <span className="last">PEREZ</span>
      </h3>
      <Image className="nature" src={Jpeg} roundedCircle />
      <h5 className="skills mt-3">
        <span className="last">TECHNICAL</span>
        <span className="first">SKILLS</span>
      </h5>
      <ul className="mb-5">
        <li> > HTML5</li>
        <li> > CSS</li>
        <li> > Bootstrap</li>
        <li> > MaterialUI</li>
        <li> > JavaScript</li>
        <li> > MySQL</li>
        <li> > MERN stack: MongoDB, ExpressJS, ReactJS, NodeJS</li>
      </ul>
    </Container>
  );
}

export default Home;
