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
            title="send jessica perez an email"
            href="mailto:1jessicaperez@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt="email icon"
              className="logo"
              src={PngEmail}
              roundedCircle
            />
          </a>
        </Col>
        <Col xs={4} className="item">
          <a
            title="go to jessica perez github page"
            href="https://github.com/JessicaPerez1"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt="github icon"
              className="logo"
              src={PngGithub}
              roundedCircle
            />
          </a>
        </Col>
        <Col xs={4} className="item">
          <a
            title="go to jessica perez linkedin page"
            href="https://www.linkedin.com/in/jessica-p-a13a20b5/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt="linkedin icon"
              className="logo"
              src={PngLinkedin}
              roundedCircle
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
