import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "../NavBar";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./about.css";

function About() {
  return (
    <>
      <NavBar />
      <div className="aboutbody">
        <Container className="container">
          <Row>
            <Col md={4} className="first-column text-center">
              <Image
                className="french-cat"
                src="https://i.pinimg.com/736x/e6/3f/94/e63f94393ad1765dbd4923e17c94f140--oui-oui-berets.jpg"
                roundedCircle
              />
              <h4 className="contact mt-3">
                NEW YORK, NY 10010
                <br /> <span className="cell">(917) 847-1533</span>
                <br />
                <a
                  data-toggle="tooltip"
                  title="Send me a message!"
                  id="email"
                  href="mailto:1jessicaperez@gmail.com"
                >
                  1JESSICAPEREZ@GMAIL.COM
                </a>
              </h4>
              {/* <img
            src="https://i.pinimg.com/736x/e6/3f/94/e63f94393ad1765dbd4923e17c94f140--oui-oui-berets.jpg"
            alt="french cat icon"
            width="250"
          ></img> */}
            </Col>
            <Col md={8} className="pl-sm-5">
              <p className="bio mt-4">
                Web Developer, with a marketing and hospitality manager
                background. Full-stack certificate from Columbia University
                during which I developed a comprehensive portfolio. My skillset
                and experience, put me at the forefront to join an engineering
                team tasked to accomplish strategic launches of polished user
                friendly apps.
                <br />
                I’ve set sail my own segue from France to the USA, and more
                recently from hospitality, with goals to achieve this transition
                towards becoming an accomplished Software Engineer.
                <br />
                Having worked in different industries, I have a great ability to
                balance distinct skill sets. I enjoy working in teams, am a
                great listener and communicator, looking to join a team with
                similar values and working on meaningful projects.
                <br />
                <span className="important">
                  Ambition is my drive, learning new things is my fuel.
                </span>
                <br />
                During my down time, I like watching documentaries, listening to
                music and baking delicious Canelés from Bordeaux!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default About;
