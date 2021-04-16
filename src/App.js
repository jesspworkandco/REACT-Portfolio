import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Bonus from "./components/pages/Bonus";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/bonus" exact component={Bonus} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
