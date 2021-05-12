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
      title: "Hello, I am",
    });
  };
  render() {
    return (
      <div className="home">
        <div className="greetings">
          <h1
            className="greeting-language"
            onMouseEnter={this.frenchTitle}
            onMouseLeave={this.englishTitle}
          >
            {this.state.title} Jessica Perez
          </h1>
          <h2>Enthusiastic Frontend Developer, ready for my next move!</h2>
          <h3 className="opportunities">Open to: Freelance || Full time</h3>
          <div className="skills">
            <h3 className="skills-title">Technical skills</h3>
            <p className="topics">
              HTML JavaScript CSS React/Redux NodeJS Express MySQL Bootstrap
              MaterialUI
            </p>

            <h3 className="skills-title">Business skills</h3>
            <p className="topics">
              Team Management Problem Solving Client Facing Marketing Data
              Analysis
            </p>

            <h3 className="skills-title">Soft skills</h3>
            <p className="topics">
              Empathetic Emotional intelligence Time management Curiosity Quick
              learner Ability to work remote efficiently
            </p>
          </div>
          <Link
            title="navigate to about page"
            className="btn-about"
            to="/about"
          >
            More
          </Link>
        </div>
      </div>
    );
  }
}
export default Home;
