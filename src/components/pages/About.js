import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./about.css";

function About() {
  return (
    <Jumbotron fluid className="jumbo mx-sm-auto px-3 text-center">
      <h1>
        <span className="first">JESSICA</span>
        <span className="last">PEREZ</span>
      </h1>
      <h4 className="contact mt-5">
        NEW YORK, NY 10010 || <span className="cell">(917) 847-1533</span> ||
        <a href="mailto:1jessicaperez@gmail.com"> 1JESSICAPEREZ@GMAIL.COM</a>
      </h4>
      <p className="bio mt-4">
        Full Stack Web Developer, aiming to integrate my marketing background
        with my education from Columbia University’s Full Stack web development
        Bootcamp My skillset and experience, puts me at the forefront to join a
        web development team tasked to accomplish strategic launches of
        innovative user friendly apps. A recent portfolio will show personal and
        team projects. A functionally written code will create an uninterrupted
        transition from one idea to the next. Professionally and personally,
        I’ve set sail my own segue from Marketing, and from France to the USA,
        with goals to accomplish this transition towards becoming an
        accomplished Software Engineer.
      </p>
    </Jumbotron>
  );
}

export default About;
