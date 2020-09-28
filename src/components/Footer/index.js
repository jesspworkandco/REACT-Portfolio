import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Pdf from "../../assets/Jessica-Perez-CV.pdf";

import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer text-center fixed-bottom">
      <Row className="fullrow">
        <Col className="item">
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
        <Col className="item">
          <a
            href="https://www.linkedin.com/in/jessica-p-a13a20b5/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              className="logo"
              src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"
            />
          </a>
        </Col>
        <Col className="item">
          <a href={Pdf} rel="noopener noreferrer" target="_blank">
            <Image
              className="logo"
              src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/3/1/3164.9-cv-file-icon-iconbunny.jpg"
              roundedCircle
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
