import React from "react";
import Container from "react-bootstrap/Container";
import Png from "../assets/french-flag.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { navbarData } from "../data/navbarData";

import "./header.css";

const Header = () => {
  return (
    <Navbar
      className="header-container"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container className="container">
        <Navbar.Brand href="/about">
          {" "}
          <img alt="french flag" className="flag" title="menu" src={Png} />
          ze French Coder
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {navbarData.map((item, index) => {
              return (
                <Nav.Link
                  title="navigate to navigation item page"
                  key={index}
                  href={item.path}
                >
                  {item.title}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
