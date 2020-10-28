import React, { Fragment, useState } from "react";
import Header from "./Header";
import Toggle from "./Toggle";
import "./layout.css";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openHandler = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  };
  const sidebarCloseHandler = () => {
    setSidebarOpen(false);
  };
  let sidebar;
  if (sidebarOpen) {
    sidebar = <Sidebar close={sidebarCloseHandler} sidebar={"sidebar"} />;
  }
  return (
    <Fragment>
      <Header />
      {sidebar}
      <Toggle click={openHandler} />
      <p>{children}</p>
    </Fragment>
  );
};

export default Layout;
