import React from "react";
import { Link, useLocation } from "react-router-dom";


export default function Routes() {
return (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={location.pathname === "/" ? "nav-link active" : "nav-link"}
      >
        JP
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/about"
        className={
          location.pathname === "/about" ? "nav-link active" : "nav-link"
        }
      >
        About
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/portfolio"
        className={
          location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
        }
      >
        Portfolio
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/contact"
        className={
          location.pathname === "/contact" ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </Link>
    </li>
  </ul>
);
