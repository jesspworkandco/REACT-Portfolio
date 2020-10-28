import React from "react";
import Image from "react-bootstrap/Image";
import "./componentStyles.css";

const Header = () => {
  return (
    <div id="header-wrapper">
      <h3>
        ze French
        <Image
          src="https://www.iconarchive.com/download/i91881/icons8/windows-8/Travel-Eiffel-Tower.ico"
          className="eiffel-tower mx-2"
          width="30px"
        ></Image>
        coder
        <Image
          src="https://www.iconarchive.com/download/i91881/icons8/windows-8/Travel-Eiffel-Tower.ico"
          className="eiffel-tower-2 mx-2"
          width="30px"
        ></Image>
      </h3>
    </div>
  );
};

export default Header;
