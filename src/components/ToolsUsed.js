


import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiRender
} from "react-icons/si";


import foundary from "../assets/img/foundary.svg"

import { SlSocialGithub } from "react-icons/sl";
import { FaWindows } from "react-icons/fa";


function ToolsUsed() {
  return (
    <div className="">
         <h1 className="project-heading">
          Tools <strong className="purple"> I Use </strong>
    </h1>
    
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SlSocialGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiRender />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={foundary} />
      </Col>
    </Row>
    </div>
  );
}

export default ToolsUsed;