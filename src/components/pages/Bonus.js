import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { BonusData } from "./BonusData";

import "./bonus.css";

function Bonus() {
  return (
    <div className="main-container text-center">
      <div className="bonus">
        <h1 className="title">Some little extras. . .</h1>
        <Row className="first-row">
          {BonusData.map((item) => {
            return (
              <Col
                key={item.bonusId}
                className="bonus-col"
                sm={{ span: 4, offset: 1 }}
              >
                <h2 className="card-title">{item.bonusTitle}</h2>
                {item.bonusImg && (
                  <>
                    <Card.Img
                      className="app-img"
                      src={item.bonusImg}
                      alt="game screenshot"
                    />
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      className="play"
                      title="go to the app"
                      href={item.bonusLink}
                    >
                      Start playing
                    </a>
                  </>
                )}
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
export default Bonus;
