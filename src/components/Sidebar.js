import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Jpeg from "../assets/profile-pic.jpeg";
import { Navbar, NavItem } from "react-bootstrap";
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
        className="profile-pic mb-3 mt-1"
        src={Jpeg}
        roundedCircle
      />
      <h3>Jessica Perez</h3>
      <div className="personal-info mt-1">
        <p className="city">Brooklyn, NY</p>
        <p className="cell">(917) 847-1533</p> 
        <p><a
          data-toggle="tooltip"
          title="Send me a message!"
          id="email"
          href="mailto:1jessicaperez@gmail.com"
        >
          1JESSICAPEREZ@GMAIL.COM
        </a></p>
      </div>
      <div className="navigation-section">
        <Navbar className="navigation">

            <NavItem className="nav-link">
              <Link className="links" to="/">
                About
              </Link>
            </NavItem>
            
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
        </Navbar>
      </div>
    </div>
  );
};

export default Sidebar;
