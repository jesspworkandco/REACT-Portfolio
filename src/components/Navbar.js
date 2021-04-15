import React, { useState } from "react";
import { Link } from "react-router-dom";

import Jpeg from "../assets/profile-pic.jpeg";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import { NavbarData } from "./NavbarData";

import "./navbar.css";

const Navbar = () => {
  // sidebar state isOpen/isClosed
  const [sidebar, setSidebar] = useState(false);

  //toggle sidebar
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className="navbar" onClick={showSidebar}>
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-close">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <img alt="jess-pic" className="profile-pic" src={Jpeg} />
            <div className="personal-info mt-1">
              <h3>Jessica Perez</h3>
              <p className="city">Brooklyn, NY</p>
              <p className="cell">(917) 847-1533</p>
              <p>
                <a
                  data-toggle="tooltip"
                  title="Send me a message!"
                  id="email"
                  href="mailto:1jessicaperez@gmail.com"
                >
                  1JESSICAPEREZ@GMAIL.COM
                </a>
              </p>
            </div>
            {NavbarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
