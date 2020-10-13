import React from "react";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Jpeg from "../../assets/me-nature.jpeg";
import "./home.css";

function Home() {
  return (
    <Col xs={12} className="column mt-1">
      <Jumbotron fluid className="jumbo text-center">
        <Image className="nature" src={Jpeg} roundedCircle />
        <h1>
          <span className="first">JESSICA</span>
          <span className="last">PEREZ</span>
        </h1>
        <h4 className="contact mt-3">
          NEW YORK, NY 10010 || <span className="cell">(917) 847-1533</span>
          ||
          <a
            data-toggle="tooltip"
            title="Send me a message!"
            id="email"
            href="mailto:1jessicaperez@gmail.com"
          >
            1JESSICAPEREZ@GMAIL.COM
          </a>
        </h4>
        <p className="bio mt-4">
          Web Developer, with a marketing and hospitality manager background.
          Full-stack certificate from Columbia University during which I
          developed a comprehensive portfolio. My skillset and experience, put
          me at the forefront to join an engineering team tasked to accomplish
          strategic launches of polished user friendly apps.
          <br />
          I’ve set sail my own segue from France to the USA, and more recently
          from hospitality, with goals to accomplish this transition towards
          becoming an accomplished Software Engineer.
          <br />
          Having worked in different industries, I have a great ability to
          balance distinct skill sets. I enjoy working in teams, am a great
          listener and communicator, looking to join a team with similar values
          and working on meaningful projects.
          <br />
          <span className="important">
            Ambition is my drive, learning new things is my fuel.
          </span>
          <br />
          During my down time, I like watching documentaries, listening to music
          and baking delicious french sweets!
        </p>
      </Jumbotron>
    </Col>
  );
}

export default Home;
