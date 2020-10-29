import React from "react";
// import Image from "react-bootstrap/Image";
import "./about.css";
//array of topics
const topicsArray = [
  "HTML",
  "JavaScript",
  "CSS",
  "ReactJS",
  "jQuery",
  "NodeJS",
  "Express",
  "MySQL",
  "MongoDB",
  "Bootstrap",
  "MaterialUI",
];
const businessArray = [
  "Team management",
  "Problem solving",
  "Client facing",
  "Marketing",
  "Business development",
  "Data analysis",
  "Communication",
  "Negotiation",
];
const containerStyle = {
  maxWidth: "900px",
};
const greetingsStyle = {
  textAlign: "center",
  marginBottom: "0",
};
const topicStyle = {
  color: "red",
};
const bioStyle = {
  fontSize: "1.1rem",
  textAlign: "justify",
  textJustify: "inter-word",
  marginTop: "10px",
};
class Home extends React.Component {
  state = {
    title: "Hi, I am",
    topicsIndex: 0,
    businessIndex: 0,
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
      this.setState({
        topicsIndex: currentIdx + 1,
        businessIndex: currentIdx + 1,
      });
    }, 1400);
  }
  componentWillUnmount() {
    clearInterval(this.timeout);
  }
  render() {
    let changeTopics = topicsArray[this.state.topicsIndex % topicsArray.length];
    let changeBusiness =
      businessArray[this.state.businessIndex % businessArray.length];
    return (
      <>
        <div className="container" style={containerStyle}>
          <div className="greetings text-center">
            <h1
              className="greeting"
              style={greetingsStyle}
              onMouseEnter={this.frenchTitle}
              onMouseLeave={this.englishTitle}
            >
              {this.state.title}
            </h1>
            <h2 style={greetingsStyle} className="name">
              Jessica Perez
            </h2>
            <img
              src="https://image.flaticon.com/icons/png/512/26/26868.png"
              // src="https://img2.pngio.com/baguette-bread-icon-noto-emoji-food-drink-iconset-google-baguette-icon-png-1024_1024.png"
              alt="beret icon"
              width="60"
              height="70"
              className="beret pb-3 px-2 mx-auto"
            ></img>
            <h3 style={greetingsStyle}>Enthusiastic Frontend Developer</h3>
          </div>
          <div className="bio">
            <p style={bioStyle}>
              Recent graduate from Columbia University, aspiring Frontent
              Developer with a marketing background.
              <br />
              Well organized with strong managing and client facing skills.
              Analytical, decisive, coupled with a passion for exceeding
              expectations. Passion for self-teaching and learning new skills
              quickly.
              <br />
              During my down time, I like watching documentaries, listening to
              music and baking delicious Canelés from Bordeaux!
            </p>
          </div>
          <h4 className="skills">
            <span className="text-left">Technical skills:</span>{" "}
            <span style={topicStyle}>{changeTopics}</span>
          </h4>
          <h4 className="business">
            <span className="text-left">Business skills:</span>{" "}
            <span style={topicStyle}>{changeBusiness}</span>
          </h4>
        </div>
      </>
    );
  }
}
export default Home;
