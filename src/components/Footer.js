import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import github from "../assets/img/github-142-svgrepo-com.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="foot">
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h1 className="text-white">Harsh</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/harshgoyal13/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/HarshGoyal13"><img src={github} alt="" /></a>
                <a href="https://leetcode.com/u/harsh_-1326/"><img src={navIcon3} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
