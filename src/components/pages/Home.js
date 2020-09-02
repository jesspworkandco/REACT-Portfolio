import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import "./home.css";

function Home() {
  return (
    <Container className="container">
      <Row className="row mx-auto">
        <Col xs={6} md={4}>
          <Image
            className="logo"
            href="https://github.com/JessicaPerez1"
            src="https://icons-for-free.com/iconfiles/png/512/part+1+github-1320568339880199515.png"
            roundedCircle
          />
        </Col>
        <Col xs={6} md={4}>
          <Image
            className="logo"
            href=""
            src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"
          />
        </Col>
        <Col xs={6} md={4}>
          <Image
            className="logo"
            href="https://github.com/JessicaPerez1"
            src="https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/3/1/3164.9-cv-file-icon-iconbunny.jpg"
            roundedCircle
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
