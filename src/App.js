import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Contact from "./components/pages/Contact";
import Bonus from "./components/pages/Bonus";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path={["/", "/projects"]} exact component={Projects} />
          <Route path={"/about"} exact component={About} />
          <Route path={"/skills"} exact component={Skills} />
          <Route path={"/contact"} exact component={Contact} />
          <Route path={"/bonus"} exact component={Bonus} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
