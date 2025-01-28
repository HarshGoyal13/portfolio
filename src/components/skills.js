import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GiCrossedChains } from "react-icons/gi";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import {
  SiSolidity,
} from "react-icons/si";

import { FaRust, FaEthereum, FaGitAlt } from "react-icons/fa";
import {  SiExpress, SiTailwindcss, SiSolana } from "react-icons/si";


function Skills() {
  return (
    <div>

    <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
    </h1>


    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
   
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
   


      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaRust />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      
      <Col xs={4} md={2} className="tech-icons">
        <FaGitAlt />
      </Col>


      <Col xs={4} md={2} className="tech-icons">
      <GiCrossedChains />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaEthereum />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiSolana />
      </Col>



    </Row>

    </div>
  );
}

export default Skills;