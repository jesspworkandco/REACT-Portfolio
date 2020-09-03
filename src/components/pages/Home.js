import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import "./home.css";

function Home() {
  return (
    <Container className="container mx-sm-auto px-3 text-center">
      <h1 className="links mt-5">
        <span className="first">JESSICA</span>
        <span className="last">PEREZ</span>
      </h1>
      <Row className="row pt-5 mx-sm-auto">
        <Col sm={4} mb-3>
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
        <Col sm={4} mb-3>
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
        <Col sm={4}>
          <a
            href="assets/Jessica-Perez-CV.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
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

export default Home;
