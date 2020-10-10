import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <Navbar className="navigation" bg="dark" fixed="top" expand="lg">
      <Navbar.Brand id="home" href="/">
        JP
      </Navbar.Brand>
      <Navbar.Toggle
        className="toggler"
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navlinks justify-content-end">
          <NavItem className="nav-link">
            <Link className="links" to="/portfolio">
              Portfolio
            </Link>
          </NavItem>
          <NavItem className="nav-link">
            <Link className="links" to="/contact">
              Contact
            </Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
