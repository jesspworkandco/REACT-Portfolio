import React from "react";

import Image from "react-bootstrap/Image";
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
        <div className="homebody">
          <h1 className="name text-center">
            <p onMouseEnter={this.frenchTitle} onMouseLeave={this.englishTitle}>
              {this.state.title}
            </p>
            <span className="first">Jessica</span>
            <img
              src="https://image.flaticon.com/icons/png/512/26/26868.png"
              // src="https://img2.pngio.com/baguette-bread-icon-noto-emoji-food-drink-iconset-google-baguette-icon-png-1024_1024.png"
              alt="beret icon"
              width="60"
              height="70"
              className="beret pb-3 px-2"
            ></img>
            <span className="last">Perez</span>
          </h1>
          <p className="coder-text text-center">
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
          </p>
        </div>
      </>
    );
  }
}
export default Home;
