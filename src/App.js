import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Bonus from "./components/pages/Bonus";
import Footer from "./components/Footer";

import * as CgDarkIcons from "react-icons/cg";
import "./App.css";

const App = () => {
  // initialize theme to light
  const [theme, setTheme] = useState("light");
  // toggle
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <div className="App">
          <GlobalStyles />
          <CgDarkIcons.CgDarkMode
            className="dark-mode-icon"
            onClick={themeToggler}
          />
          <Router>
            <Header />
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/portfolio" exact component={Portfolio} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/bonus" exact component={Bonus} />
            </Switch>
            <Footer />
          </Router>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
