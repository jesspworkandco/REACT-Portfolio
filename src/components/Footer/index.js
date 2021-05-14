import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import * as HiOutlineIcons from "react-icons/hi";
import * as RiGithubIcons from "react-icons/ri";
import * as RiLinkedinIcons from "react-icons/ri";
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
            <HiOutlineIcons.HiOutlineMail className="logo" />
          </a>
        </Col>
        <Col xs={4} className="item">
          <a
            title="go to jessica perez github page"
            href="https://github.com/JessicaPerez1"
            rel="noopener noreferrer"
            target="_blank"
          >
            <RiGithubIcons.RiGithubLine className="logo" />
          </a>
        </Col>
        <Col xs={4} className="item">
          <a
            title="go to jessica perez linkedin page"
            href="https://www.linkedin.com/in/jessica-p-a13a20b5/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <RiLinkedinIcons.RiLinkedinLine className="logo" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
export default Footer;
