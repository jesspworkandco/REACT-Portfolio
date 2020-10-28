import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import Image from "react-bootstrap/Image";
import "./about.css";

//array of topics
const topicsArray = [
  "HTML",
  "JavaScript",
  "ReactJS",
  "jQuery",
  "NodeJS",
  "MySQL",
  "MongoDB",
  "Bootstrap",
  "MaterialUI",
];
const topicStyle = {
  color: "#008080",
};
const containerStyle = {
  marginTop: "8em",
};
const bioStyle = {
  marginTop: "1rem",
  fontSize: "1.1rem",
  /* line-height: 1.7rem; */
  textAlign: "justify",
  textJustify: "inter-word",
};

class Home extends React.Component {
  state = {
    title: "Hi, I am",
    topicsIndex: 0,
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
  componentDidMount() {
    this.timeout = setInterval(() => {
      //current index is 0
      let currentIdx = this.state.topicsIndex;
      //state to go up by 1 index every 1.5 sec
      this.setState({ topicsIndex: currentIdx + 1 });
    }, 1200);
  }
  componentWillUnmount() {
    clearInterval(this.timeout);
  }
  render() {
    let changeTopics = topicsArray[this.state.topicsIndex % topicsArray.length];
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
          </div>
          <div className="aboutbody">
            <Container className="container" style={containerStyle}>
              <Row>
                <Col sm={0} md={2} className="first-column text-center"></Col>
                <Col sm={12} md={10} className="pl-sm-5">
                  <h3>Enthusiastic Frontend Developer</h3>
                  <p className="bio" style={bioStyle}>
                    Recent graduate from Columbia University, aspiring Frontent
                    Developer with a marketing background.
                    <br />
                    Well organized with strong managing and client facing
                    skills. Analytical, decisive, coupled with a passion for
                    exceeding expectations. Passion for self-teaching and
                    learning new skills quickly.
                    <br />
                    During my down time, I like watching documentaries,
                    listening to music and baking delicious Canelés from
                    Bordeaux!
                  </p>
                  <h4 className="skills text-left">
                    Technical skills:{" "}
                    <span style={topicStyle}>{changeTopics}</span>
                  </h4>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
