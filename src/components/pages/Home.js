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
      <div className="home-container">
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
              HTML - CSS - JavaScript - NodeJS - React/Redux - Bootstrap -
              MaterialUI
            </p>

            <h3 className="skills-title">Business skills</h3>
            <p className="topics">
              Problem solving - Team management - Client facing - Marketing -
              Data analysis
            </p>

            <h3 className="skills-title">Soft skills</h3>
            <p className="topics">
              Empathy - Quick learning - Emotional intelligence - Time
              management - Experience working remotely
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
