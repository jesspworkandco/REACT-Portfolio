import React from "react";
import Png from "../../assets/headshot.png";
import "./about.css";

const About = () => {
  return (
    <div className="main-container">
      <div className="bio text-center">
        <div className="bio-text">
          <h1 className="mystory ">My story in short...</h1>
          <img alt="jessica profile pic" className="pic" src={Png} />
          <p>
            After months of self-education and attending Columbia University
            Fullstack immersive course in 2020, I got the chance to work as a
            freelance frontend developer helping{" "}
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
            Well organized, analytical, decisive, coupled with a passion for
            exceeding expectations - proven ability to self-teach and learn new
            skills quickly.
            <br />
            When I'm not coding, I watch documentaries and bake (i.e eat)
            delicious Canelés from Bordeaux!
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
