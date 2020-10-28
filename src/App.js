import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";
function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Layout />
      <div>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
