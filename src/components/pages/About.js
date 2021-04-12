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

class Home extends React.Component {
  // initial state
  state = {
    title: "Hello I am",
    technicalIndex: 0,
    businessIndex: 0,
  };
  frenchTitle = () => {
    this.setState({
      title: "Bonjour je m'appelle",
    });
  };
  englishTitle = () => {
    this.setState({
      title: "Hello I am",
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
    }, 1500);
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
        <div className="about">
          <div className="greetings text-center">
            <h2
              className="greeting-language"
              onMouseEnter={this.frenchTitle}
              onMouseLeave={this.englishTitle}
            >
              {this.state.title}, Jessica Perez
            </h2>
            {/* <img
              src="https://image.flaticon.com/icons/png/512/26/26868.png"
              alt="beret icon"
              width="60"
              height="70"
              className="beret pb-3 px-2 mx-auto"
            ></img> */}
            <h4 >Enthusiastic Frontend Developer, looking for a fulltime position</h4>
          </div>
          <div className="bio">
            <p className="bio-text">
              Currently a Frontend Developer, sharpening my ReactJs skills at
                <a className="cobalt" href="https://cobalt.co/" rel="noopener noreferrer" target="_blank"> Cobalt</a>
                - contract based position.
              <br />
              Well organized with strong managing and client facing skills.
              Analytical, decisive, coupled with a passion for exceeding
              expectations. Passion for self-teaching and learning new skills
              quickly.
              <br />
              When I'm not coding, I like watching documentaries, listening to
              music and baking delicious Canelés from Bordeaux!
            </p>
            <div className="skills-business text-left">
              <h5 className="skills">
                <span>Technical skills:</span>{" "}
                <span className= "topics">{changeTechnical}</span>
              </h5>
              <h5 className="business">
                <span>Business skills:</span>{" "}
                <span className= "topics">{changeBusiness}</span>
              </h5>
            </div>
          </div>
        </div>
    );
  }
}
export default Home;
