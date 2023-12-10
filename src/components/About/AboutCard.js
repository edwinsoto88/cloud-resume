import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Edwin Soto Villela </span>
            from <span className="purple"> Dallas, TX.</span>
            <br />
            I am currently a Technology Analyst at Accenture.
            <br />
            I'm currently majoring in Computer Science with a focus on Cloud Engineering at the University of North Texas.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Rock Climbing
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing my Guitar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A smooth sea never made a skilled sailor."{" "}
          </p>
          <footer className="blockquote-footer">Franklin D. Roosevelt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
