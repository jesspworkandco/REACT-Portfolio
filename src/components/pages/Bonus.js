import React from "react";
import { Link } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import PngRgb from "../../assets/rgb-hard.png";

import "./bonus.css";

function Bonus() {
  return (
    <div className="bonus-container text-center">
      <div className="bonus">
        <h1 className="title">Some little extras coming soon . . .</h1>
        <Row className="first-row">
          <Col className="bonus-col" sm={{ span: 4, offset: 1 }}>
            {" "}
            <h2 className="card-title">
              Test your RGB color knoweledge while waiting for the train!
            </h2>
            <img
              className="app-img"
              src={PngRgb}
              alt="rgb game screenshot"
            ></img>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="play"
              title="go to the rgb app"
              href="https://jessicaperez1.github.io/RGB-Color-Game/"
            >
              Click to start the game
            </a>
          </Col>
          <Col className="bonus-col" sm={{ span: 4, offset: 1 }}>
            {" "}
            Hang tight for the second bonus 😎{" "}
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default Bonus;
