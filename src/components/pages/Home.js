import React from "react";
import { Link } from "react-router-dom";
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
      title: "Hello I am",
    });
  };
  render() {
    return (
      <div className="home">
        <div className="greetings">
          <h2
            className="greeting-language"
            onMouseEnter={this.frenchTitle}
            onMouseLeave={this.englishTitle}
          >
            {this.state.title} Jessica Perez
          </h2>
          <h4>Enthusiastic Frontend Developer, ready for my next move!</h4>
          <div className="skills">
            <h5 className="skills-title">Technical skills</h5>
            <p className="topics">
              HTML JavaScript CSS React/Redux NodeJS Express MySQL Bootstrap
              MaterialUI
            </p>

            <h5 className="skills-title">Business skills</h5>
            <p className="topics">
              Team Management Problem Solving Client Facing Marketing Data
              Analysis
            </p>

            <h5 className="skills-title">Soft skills</h5>
            <p className="topics">
              Empathetic Team player Time management Curiosity Quick learner
            </p>
          </div>
          <Link className="btn-about" to="/about">
            More
          </Link>
        </div>
      </div>
    );
  }
}
export default Home;
