import React from "react";
import NavBar from "../NavBar";
import "./home.css";

class Home extends React.Component {
  state = {
    title: "Hello, I am",
  };
  frenchTitle = () => {
    this.setState({
      title: "Bonjour, je m'appelle",
    });
  };
  englishTitle = () => {
    this.setState({
      title: "Hello, I am",
    });
  };
  render() {
    return (
      <>
        <NavBar />
        <div className="homebody">
          <h1 className="name text-center">
            <p onMouseEnter={this.frenchTitle} onMouseLeave={this.englishTitle}>
              {this.state.title}
            </p>
            <span className="first">JESSICA</span>
            <img
              src="https://image.flaticon.com/icons/png/512/26/26868.png"
              // src="https://img2.pngio.com/baguette-bread-icon-noto-emoji-food-drink-iconset-google-baguette-icon-png-1024_1024.png"
              alt="baguette icon"
              width="60"
              height="70"
              className="beret pb-3 px-2"
            ></img>
            <span className="last">PEREZ</span>
          </h1>
          <p className="text text-center">
            ze French
            <img
              src="../../assets/eiffel-tower.png"
              alt="eiffel tower icon"
              id="eiffel"
            ></img>
            coder
          </p>
        </div>
      </>
    );
  }
}
export default Home;
