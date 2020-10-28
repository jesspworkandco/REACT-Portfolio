import React, { useState } from "react";
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
      <h2>Sidebar</h2>
      <button id="close" onClick={closeHandler}>
        &times; close
      </button>
    </div>
  );
};

export default Sidebar;
