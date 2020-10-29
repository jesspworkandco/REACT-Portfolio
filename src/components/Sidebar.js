import React, { useState } from "react";
import Image from "react-bootstrap/Image";
// import Jpeg from "../assets/me-nature.jpeg";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../components/componentStyles.css";

const Sidebar = (props) => {
  const [sidebarClass, setSidebarClass] = useState(props.sidebar);
  const closeHandler = (e) => {
    e.preventDefault();
    setSidebarClass("sidebar close");
    setTimeout(() => {
      props.close();
    }, 1000);
  };
  return (
    <div className={sidebarClass}>
      <button id="close" onClick={closeHandler}>
        &times;
      </button>
      <Image
        className="french-cat mb-3"
        width="150"
        src="https://i.pinimg.com/736x/e6/3f/94/e63f94393ad1765dbd4923e17c94f140--oui-oui-berets.jpg"
        roundedCircle
      />
      {/* <Image
        className="french-cat mb-3"
        src={Jpeg}
        width="170"
        roundedCircle
      ></Image> */}
      <h4>Jessica Perez</h4>
      <p className="city mt-1 mb-1">
        NEW YORK, NY
        <br /> (917) 847-1533
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
      <Navbar className="navigation pt-0">
        <Nav className="flex-column">
          <NavItem className="nav-link">
            <Link className="links" to="/">
              About
            </Link>
          </NavItem>
          <br />
          <NavItem className="nav-link">
            <Link className="links" to="/portfolio">
              Projects
            </Link>
          </NavItem>
          <NavItem className="nav-link">
            <Link className="links" to="/contact">
              Contact
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Sidebar;
