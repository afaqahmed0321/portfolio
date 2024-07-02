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
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={true}
              title="Snap Promise (Mobile)"
              description="Restoring the Significance of Promises in today’s world. We're on a mission to restore the lost value of promises with accountability, integrity, and fulfillment in both personal and professional spheres driven based on ratings and reward system.
                            Transforming Workspace Collaboration in terms of commitments Relationships thrive on trust and accountability. Our mission is to restore the significance of promises in the business world and workspace and add quality evaluation principles."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={true}
              title="Snap Promise (Web)"
              description="Restoring the Significance of Promises in today’s world. We're on a mission to restore the lost value of promises with accountability, integrity, and fulfillment in both personal and professional spheres driven based on ratings and reward system.
                            Transforming Workspace Collaboration in terms of commitments Relationships thrive on trust and accountability. Our mission is to restore the significance of promises in the business world and workspace and add quality evaluation principles."
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={true}
              title="eSyncMate"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              // ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={true}
              title="Serve on Route"
              description="Mobile Application like InDrive or Uber in which any rider can post their route time before, and anyone who want to send any parcel on that route on that time can bid with amount then driver can get notify and able to accept the bid to deliver the parcel"
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Instant Space"
              description="Instant Space is a Dashboard for different types of user, that connects persons who have space for like parking or warehouse kind and a person who need space for place their things or park a vehicle or place containers etc."
            // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Grow and Share"
              description="Grow and Share is a Dashboard for different types of user, like consumer and retailer that have seed like or had a dispensary they post product and someone who want this can Signup as consumer and select product and also filter by radius or type, and also can find product on map that I implement using GoogleMap API, also a dating app that connects you with your perfect match."
            // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
