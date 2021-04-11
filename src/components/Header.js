import React from "react";
import Image from "react-bootstrap/Image";
import "./componentStyles.css";

const Header = () => {
  return (
    <div id="header-wrapper">
      <h3>
        <Image
          src="https://www.iconarchive.com/download/i91881/icons8/windows-8/Travel-Eiffel-Tower.ico"
          alt="Eiffel tower 1"
          className="eiffel-tower"
        ></Image>      
        ze French coder
      </h3>
    </div>
  );
};

export default Header;
