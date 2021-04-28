import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import PngEmail from "../../assets/email-icon.png";
import PngGithub from "../../assets/github-icon.png";
import PngLinkedin from "../../assets/linkedin-icon.png";
import "./footer.css";

function Footer() {
  return (
    <Container className="footer text-center">
      <Row className="fullrow">
        <Col xs={4} className="item">
          <a
            href="mailto:1jessicaperez@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image className="logo" src={PngEmail} roundedCircle />
          </a>
        </Col>
        <Col xs={4} className="item">
          <a
            href="https://github.com/JessicaPerez1"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image className="logo" src={PngGithub} roundedCircle />
          </a>
        </Col>
        <Col xs={4} className="item">
          <a
            href="https://www.linkedin.com/in/jessica-p-a13a20b5/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image className="logo" src={PngLinkedin} roundedCircle />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
