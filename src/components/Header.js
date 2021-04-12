import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <Image
          src="https://www.iconarchive.com/download/i91881/icons8/windows-8/Travel-Eiffel-Tower.ico"
          alt="Eiffel tower 1"
          className="eiffel-tower"
        ></Image>  
        <Link className="home" to="/">   
          ze French Coder
        </Link>
        </div>
          <div id="header-wrapper">
          </div>
    </div>
  );
};

export default Header;
