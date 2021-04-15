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
          <h4>
            Enthusiastic Frontend Developer, looking for a fulltime position!
          </h4>
        </div>
        <div className="bio">
          <p className="bio-text">
            With all that has been going on in 2020, I thought{" "}
            <span className="bold">“what best way to come out of it?”</span> and
            the answer was
            <span className="bold"> “better than I went in!”</span>.
            <br />
            After my job in hospitality ended due to COVID, with my new found
            time, I took a leap of faith and pivoted my profession towards
            becoming an engineer. After months of self-education and attending
            Columbia University Fullstack boot camp, I got the chance to work at
            <a
              className="cobalt"
              href="https://cobalt.co/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              Cobalt{" "}
            </a>
            as a Frontend Engineer (ReactJS). I am now looking to make my mark
            and grow with a fulltime position!
            <br />
            The road ahead, I’m sure will not be easy but nothing worth doing
            comes easy.
            <br />
            Well organized, analytical, decisive, coupled with a passion for
            exceeding expectations - proven ability to self-teach and learn new
            skills quickly.
            <br />
            When I'm not coding, I watch documentaries and bake (i.e eat)
            delicious Canelés from Bordeaux!
          </p>
          <div className="skills-business text-left">
            <h5 className="skills">
              <span>Technical skills:</span>{" "}
              <span className="topics">{changeTechnical}</span>
            </h5>
            <h5 className="business">
              <span>Business skills:</span>{" "}
              <span className="topics">{changeBusiness}</span>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
