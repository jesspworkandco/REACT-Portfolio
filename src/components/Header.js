import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Png from "../assets/french-flag.png";
import * as GiIcons from "react-icons/gi";
import Navbar from "./Navbar";
import "./header.css";

const Header = () => {
  return (
    <Container className="container">
      <Row className="header">
        <Col sm={3} className="brand">
          <Link title="go to the home page" className="brandName" to="/">
            <img alt="french flag" className="flag" title="menu" src={Png} />
            ze French Coder
          </Link>
        </Col>
        <Col sm={7} className="nav">
          <Navbar />
        </Col>
        <Col sm={2} className="croissant-icon">
          <Link
            data-toggle="tooltip"
            title="go to the bonus page"
            className="bonus"
            to="/bonus"
          >
            <GiIcons.GiCroissant className="croissant" />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
