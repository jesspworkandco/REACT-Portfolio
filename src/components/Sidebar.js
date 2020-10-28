import React, { useState } from "react";
import Image from "react-bootstrap/Image";
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
        className="french-cat mb-2 mt-5"
        width="150"
        src="https://i.pinimg.com/736x/e6/3f/94/e63f94393ad1765dbd4923e17c94f140--oui-oui-berets.jpg"
        roundedCircle
      />
      <h4>Jessica Perez</h4>
      <p className="city mt-3">
        NEW YORK, NY
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
      {/* <div className="container"> */}
      <Navbar className="navigation">
        <Nav className="flex-column mr-auto">
          <NavItem className="nav-link mr-2">
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
        </Nav>
      </Navbar>
      {/* </div> */}
    </div>
  );
};

export default Sidebar;
