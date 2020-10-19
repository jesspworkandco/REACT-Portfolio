import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <>
      <Navbar
        className="navigation justify-content-end"
        fixed="top"
        expand="lg"
      >
        {/* <img
          src="https://image.flaticon.com/icons/png/512/26/26868.png"
          alt="beret icon"
          width="40"
        ></img> */}
        <Navbar.Brand id="home" href="/" className="pl-2">
          JP
        </Navbar.Brand>
        <Navbar.Toggle
          className="toggler "
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="navlinks justify-content-end">
            <NavItem className="nav-link">
              <Link className="links" to="/about">
                About
              </Link>
            </NavItem>
            <NavItem className="nav-link">
              <Link className="links" to="/portfolio">
                Portfolio
              </Link>
            </NavItem>
            {/* <NavItem className="nav-link">
              <Link className="links" to="/contact">
                Contact
              </Link>
            </NavItem> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
