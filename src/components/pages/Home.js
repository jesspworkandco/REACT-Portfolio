import React from "react";
// import { Link } from "react-router-dom";
import "./home.css";

class Home extends React.Component {
  // state = {
  //   title: "Hello, I am",
  // };
  // frenchTitle = () => {
  //   this.setState({
  //     title: "Bonjour, je m'appelle",
  //   });
  // };
  // englishTitle = () => {
  //   this.setState({
  //     title: "Hello, I am",
  //   });
  // };
  render() {
    return (
      <div className="home-container">
        <div className="greetings">
          <h1
            className="greeting-language"
            // onMouseEnter={this.frenchTitle}
            // onMouseLeave={this.englishTitle}
          >
            {/* {this.state.title} */}
            Jessica Perez
          </h1>
          <h2 className="jobTitle">
            Associate Developer at
            <a
              title="go visit workco website"
              className="workco"
              href="https://work.co/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              Work&Co{" "}
            </a>
          </h2>
          <div className="main-container">
            <div className="bio text-center">
              <div className="bio-text">
                <p>
                  After months of self-education and attending Columbia
                  University Fullstack immersive course in 2020, I got the
                  chance to work as a freelance frontend developer helping{" "}
                  <a
                    title="go visit cobalt website"
                    className="cobalt"
                    href="https://cobalt.co/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {" "}
                    Cobalt{" "}
                  </a>{" "}
                  improve their website.
                </p>
                <p>
                  I then did a 3 month internship at
                  <a
                    title="go visit workand co website"
                    className="workco"
                    href="https://work.co/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {" "}
                    Work&Co
                  </a>
                  , after which I started a full time position as an Associate
                  Developer.
                </p>
                <p>
                  Well organized, analytical, decisive, coupled with a passion
                  for exceeding expectations - proven ability to self-teach and
                  learn new skills quickly.
                  <br />
                  When I'm not coding, I watch documentaries and bake (i.e eat)
                  delicious Canelés from Bordeaux!
                </p>
              </div>
            </div>
          </div>
          {/* <div className="skills">
            <h3 className="skills-title">Technical skills</h3>
            <p className="topics">
              JavaScript - NodeJS - ReactJS - React Native - Typescript -
              Bootstrap - MaterialUI - Storybook
            </p>

            <h3 className="skills-title">Business skills</h3>
            <p className="topics">
              Problem solving - Team management - Client facing - Marketing -
              Data analysis
            </p>

            <h3 className="skills-title">Soft skills</h3>
            <p className="topics">
              Empathy - Quick learning - Emotional intelligence - Time
              management
            </p>
          </div> */}
        </div>
      </div>
    );
  }
}
export default Home;
