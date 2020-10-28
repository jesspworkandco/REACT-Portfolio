import React from "react";

// import Image from "react-bootstrap/Image";
import "./home.css";

class Home extends React.Component {
  state = {
    title: "Hi, I am",
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
        <div className="home">
          <div className="greetings">
            <h1
              onMouseEnter={this.frenchTitle}
              onMouseLeave={this.englishTitle}
            >
              {this.state.title}
            </h1>
            <h2 className="name">
              <span>Jessica</span>
              <img
                src="https://image.flaticon.com/icons/png/512/26/26868.png"
                // src="https://img2.pngio.com/baguette-bread-icon-noto-emoji-food-drink-iconset-google-baguette-icon-png-1024_1024.png"
                alt="beret icon"
                width="60"
                height="70"
                className="beret pb-3 px-2"
              ></img>
              <span>Perez</span>
            </h2>
            {/* <p className="coder-text">
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
            </p> */}
          </div>
        </div>
      </>
    );
  }
}
export default Home;
