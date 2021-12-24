import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Png from "../assets/french-flag.png";
import Navbar from "./Navbar";

import "./header.css";

const Header = () => {
  return (
    <Container className="container">
      <Row className="header">
        <Col sm={7} className="brand">
          <Link title="go to the about page" className="brandName" to="/about">
            <img alt="french flag" className="flag" title="menu" src={Png} />
            ze French Coder
          </Link>
        </Col>
        <Col sm={5} className="navItems">
          <Navbar />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
