import React from "react";
import { Link } from "react-router-dom";

import { NavbarData } from "./NavbarData";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {NavbarData.map((item, index) => {
        return (
          <div key={index} className={item.cName}>
            <Link
              title="path links to all different pages of the app"
              to={item.path}
            >
              {item.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
