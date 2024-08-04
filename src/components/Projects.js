import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg from "../assets/img/jobMingle.png";
import projImg1 from "../assets/img/studyNotion.png";
import projImg2 from "../assets/img/ecom.png";
import projImg3 from "../assets/img/Tic Tac Toe.png";
import projImg4 from "../assets/img/Ecomzy.png";
import projImg5 from "../assets/img/Discord.png";
import projImg6 from "../assets/img/RAzorpay.png";
import projImg7 from "../assets/img/modern-Chair.png";
import projImg8 from "../assets/img/weatherApp.png";
import projImg9 from "../assets/img/password.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
    {
      title: "StudyNotion",
      description: "Design & Development",
      imgUrl: projImg1,
      websiteUrl: "https://edtech-platform206.vercel.app/"
    },
    {
      title: "JobMingle",
      description: "Design & Development",
      imgUrl: projImg,
      websiteUrl: "https://jobmingle-y7jf.onrender.com/"
    },
    {
      title: "ZenCart",
      description: "Design & Development",
      imgUrl: projImg2,
      websiteUrl : "https://zen-c-art.vercel.app/"
    },
    {
      title: "Multiplayer-T3",
      description: "Design & Development",
      imgUrl: projImg3,
      websiteUrl: "https://multi-player-t3.vercel.app/"
    },
    {
      title: "Ecomzy",
      description: "Design & Development",
      imgUrl: projImg4,
      websiteUrl: "https://ecomzy-redux.vercel.app/"
    },
    {
      title: "Discord-Clone",
      description: "Design & Development",
      imgUrl: projImg5,
      websiteUrl:"https://discord-ui-clone-three.vercel.app/"
    },
    {
      title: "Razorpay-Clone",
      description: "Design & Development",
      imgUrl: projImg6,
      websiteUrl: "https://razorpay-ui-livid.vercel.app/"
    },
    {
      title: "Modern-Chair",
      description: "Design & Development",
      imgUrl: projImg7,
      websiteUrl: "https://harshgoyal13.github.io/Modern-Chair/"
    },
    {
      title: "Weather-App",
      description: "Design & Development",
      imgUrl: projImg8,
      websiteUrl: "https://harshgoyal13.github.io/weather-App/"
    },
    {
      title: "Password-Generator",
      description: "Design & Development",
      imgUrl: projImg9,
      websiteUrl: " https://harshgoyal13.github.io/Password-Generator/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>please click on the project to check the project sites.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background"></img>
    </section>
  )
}
