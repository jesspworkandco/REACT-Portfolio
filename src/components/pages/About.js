import React from "react";
import "./about.css";
//array of technical skills
const technicalArray = [
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
//array of business skills
const businessArray = [
  "Team management",
  "Problem solving",
  "Client facing",
  "Marketing",
  "Data analysis",
  "Communication",
  "Negotiation",
];
// const containerStyle = {
//   maxWidth: "900px",
//   marginBottom: "100px",
//   overflowY: "scroll"
// };
const greetingsStyle = {
  textAlign: "center",
  marginBottom: "0",
  color: "rgb(73, 71, 71)",
  fontFamily: "Cormorant serif",
  fontSize:30,
};
const topicStyle = {
  color: "red",
};
const bioStyle = {
  fontFamily: "Cormorant serif",
  fontSize: 22,
  textAlign: "center",
  // textJustify: "inter-word",
  marginTop: "10px",
};
class Home extends React.Component {
  state = {
    title: "Hi, I am",
    technicalIndex: 0,
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
      let currentIdx = this.state.technicalIndex;
      //state to go up by 1 index every 1.4 sec
      this.setState({
        technicalIndex: currentIdx + 1,
        businessIndex: currentIdx + 1,
      });
    }, 1400);
  }
  componentWillUnmount() {
    clearInterval(this.timeout);
  }
  render() {
    let changeTechnical =
      technicalArray[this.state.technicalIndex % technicalArray.length];
    let changeBusiness =
      businessArray[this.state.businessIndex % businessArray.length];
    return (
      <>
        <div className="container" >
          <div className="greetings text-center">
            <h2
              className="greeting"
              onMouseEnter={this.frenchTitle}
              onMouseLeave={this.englishTitle}
            >
              {this.state.title}
            </h2>
            <h3 style={greetingsStyle} className="name">
              Jessica Perez
            </h3>
            <img
              src="https://image.flaticon.com/icons/png/512/26/26868.png"
              alt="beret icon"
              width="60"
              height="70"
              className="beret pb-3 px-2 mx-auto"
            ></img>
            <h4 style={greetingsStyle}>Enthusiastic Frontend Developer</h4>
          </div>
          <div className="bio mb-2">
            <p style={bioStyle}>
              Currently a Frontend Developer/ReactJs at <a className="cobalt" href="https://cobalt.co/">Cobalt</a>, contract based position.
              <br />
              Well organized with strong managing and client facing skills.
              Analytical, decisive, coupled with a passion for exceeding
              expectations. Passion for self-teaching and learning new skills
              quickly.
              <br />
              When I'm not coding, I like watching documentaries, listening to
              music and baking delicious Canelés from Bordeaux!
            </p>
          </div>
          <div className="skills-business text-center mt-3">
          <h5 className="skills">
            <span>Technical skills:</span>{" "}
            <span style={topicStyle}>{changeTechnical}</span>
          </h5>
          <h5 className="business">
            <span>Business skills:</span>{" "}
            <span style={topicStyle}>{changeBusiness}</span>
          </h5>
          </div>
        </div>
      </>
    );
  }
}
export default Home;
