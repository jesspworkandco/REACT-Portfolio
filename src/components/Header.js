import React from "react";
import { Link } from "react-router-dom";
import * as GiIcons from "react-icons/gi";

import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <Link className="brand-name" to="/">
          ze French Coder
        </Link>
      </div>
      <div className="croissant-icon">
        <Link
          data-toggle="tooltip"
          title="Sweet EXTRA things!"
          className="bonus"
          to="/bonus"
        >
          <GiIcons.GiCroissant />
        </Link>
      </div>
    </div>
  );
};

export default Header;
