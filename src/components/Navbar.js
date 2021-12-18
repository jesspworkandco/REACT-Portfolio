import React from "react";
import { Link } from "react-router-dom";
import * as GiIcons from "react-icons/gi";
import { NavbarData } from "./NavbarData";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      {NavbarData.map((item, index) => {
        return (
          <div key={index} className={item.className}>
            <Link
              title="path links to all different pages of the app"
              to={item.path}
            >
              {item.title}
            </Link>
          </div>
        );
      })}
      <Link
        data-toggle="tooltip"
        title="go to the bonus page"
        className="bonus"
        to="/bonus"
      >
        <GiIcons.GiCroissant className="croissant" />
      </Link>
    </div>
  );
};

export default Navbar;
