import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Pdf from "../../assets/Jessica-Perez-CV.pdf";

import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer text-center fixed-bottom">
      <Row className="fullrow">
        <Col xs={3} className="item">
          <a
            href="mailto:1jessicaperez@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              className="logo"
              src="https://icon-library.com/images/mail-icon-circle/mail-icon-circle-19.jpg"
              roundedCircle
            />
          </a>
        </Col>
        <Col xs={3} className="item">
          <a
            href="https://github.com/JessicaPerez1"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              className="logo"
              src="https://icons-for-free.com/iconfiles/png/512/part+1+github-1320568339880199515.png"
              roundedCircle
            />
          </a>
        </Col>
        <Col xs={3} className="item">
          <a
            href="https://www.linkedin.com/in/jessica-p-a13a20b5/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              className="logo"
              src="https://icon-library.com/images/linkedin-icon-black-and-white/linkedin-icon-black-and-white-13.jpg"
            />
          </a>
        </Col>
        <Col xs={3} className="item">
          <a href={Pdf} rel="noopener noreferrer" target="_blank">
            <Image
              className="logo"
              src="https://icon-library.com/images/icon-resume/icon-resume-15.jpg"
              roundedCircle
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
