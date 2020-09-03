import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";

function NavBar() {
  return (
    <>
      <Navbar className="navigation" bg="dark" variant="dark">
        <Navbar.Brand id="home" href="/">
          JP
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav-link" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="nav-link" href="/portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link className="nav-link" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
