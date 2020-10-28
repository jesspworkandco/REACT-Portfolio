import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import "./navbar.css";

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar className="navigation flex-column" fixed="top" expand="lg">
          <Navbar.Toggle
            className="toggler mx-0"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav" className="ml-0 mt-0">
            <Nav className="navlinks flex-column text-center">
              {/* <span className="close">&times;</span> */}
              <Image
                className="french-cat mb-2"
                // width="220"
                src="https://i.pinimg.com/736x/e6/3f/94/e63f94393ad1765dbd4923e17c94f140--oui-oui-berets.jpg"
                roundedCircle
              />
              <h4>Jessica Perez</h4>
              <p className="city mt-3">
                NEW YORK, NY 10010
                <br /> <span className="cell">(917) 847-1533</span>
                <br />
                <a
                  data-toggle="tooltip"
                  title="Send me a message!"
                  id="email"
                  href="mailto:1jessicaperez@gmail.com"
                >
                  1JESSICAPEREZ@GMAIL.COM
                </a>
              </p>

              <NavItem className="nav-link">
                <Link className="links" to="/home">
                  Home
                </Link>
              </NavItem>
              <NavItem className="nav-link">
                <Link className="links" to="/about">
                  About
                </Link>
              </NavItem>
              <NavItem className="nav-link">
                <Link className="links" to="/portfolio">
                  Projects
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
