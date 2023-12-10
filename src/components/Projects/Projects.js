import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the projects I've recently worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="UNT Rides"
              description="This web application enables UNT students to carpool by connecting riders and drivers traveling to the same destination. Built using React, HTML/CSS, Javascript, Google API, and Firebase, it allows drivers to post trips in advance or spur of the moment while allowing riders flexible options to find and schedule rides that fit their plans. By splitting costs, it provides a cost-effective and eco-friendly transportation alternative. The platform handles trip listings, scheduling, payment processing, notifications and communication for a seamless experience. Developing an end-to-end carpooling app leverages core web development skills including UI creation, database integration, API usage, and modern frameworks like React."
              ghLink="https://github.com/edwinsoto88/capstoneproject"
              demoLink="https://edwinsoto88.github.io/capstoneproject/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Color Vision"
              description="The goal of this project is to create a web application to test vision and check if they have color blindness. This will be implemented through a web application where anyone with a link can access the surveys. Overall, this web application will provide people the ability to test for colorblindness and what type of color blindness they are if applicable. It will also allow users to upload a picture and change the color according to their specific color blindness. This project is written in HTML, CSS, JavaScript, Bootstrap, and FireBase for the backend."
              ghLink="https://github.com/edwinsoto88/color-vision"
              demoLink="https://edwinsoto88.github.io/color-vision/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Operating Systems"
              description="These projects dive into core operating systems concepts like process, resource, and file management. Project 1 has you design and implement common CPU scheduling algorithms for process management. This critical task coordinates execution across running processes. Project 2 provides shell builtin practice by rewriting 5 common commands like cd, echo, and cat in Go. You integrate these with a basic existing shell to add functionality. Through hands-on programming of the OS subsystems for processes and shells, these projects deliver vital experience for operating systems developers."
              ghLink="https://github.com/edwinsoto88/CSCE4600"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="C Based Terminal"
              description="This systems programming project entailed developing a Linux-style bash shell interface in C. Our group built core components like the command interpreter to parse input and launch processes. Individually, we added I/O redirection, piping, signal handling, and aliasing. Building this sophisticated replica shell in C taught OS and systems concepts hands-on, including file/process control, command interpretation, stream management, and signal responses. The customized shell handles navigation, program execution, flexible I/O, and more right within the terminal. Developing key utilities like a shell in C provides vital systems-level experience."
              ghLink="https://github.com/edwinsoto88/Bash-Terminal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="UNT Eagle Parking Lot System"
              description="This C++ project simulates a multi-level parking system using object-oriented principles to model different user privileges. It implements classes for 3 user types—regular, employee, and admin—each with distinct abilities based on their access rights. Developing this access-controlled simulation provides practical OOP design experience in C++. It applies core language concepts like inheritance, encapsulation through classes, headers, and access modifiers to restrict actions. Programming the differentiated capabilities demonstrates usable techniques for privilege management within a representative parking scenario."
              ghLink="https://github.com/edwinsoto88/Eagle-Parking-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
