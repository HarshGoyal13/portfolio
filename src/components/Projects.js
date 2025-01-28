import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg from "../assets/img/jobMingle.png";
import projImg1 from "../assets/img/studyNotion.png";
import projImg2 from "../assets/img/ecom.png";
import projImg5 from "../assets/img/Discord.png";
import projImg7 from "../assets/img/modern-Chair.png";
import voting from "../assets/img/voting.png";
import funding from "../assets/img/funding.png";
import cloud from "../assets/img/districloud.png";
import nft from "../assets/img/nft.png";




import 'animate.css';



export const Projects = () => {

  const projects = [
    {
      title: "ChainVote",
      description: "Design & Development",
      imgUrl: voting,
      websiteUrl: "https://chain-vote-mauve.vercel.app/"
    },
    {
      title: "DistriCloud",
      description: "Design & Development",
      imgUrl: cloud,
      websiteUrl: "https://distri-cloud.vercel.app/"
    },
    {
      title: "NFT Marketplace",
      description: "Design & Development",
      imgUrl: nft,
      websiteUrl: "https://nft-market-place-stake.vercel.app/"
    },
    {
      title: "CrowdSpark",
      description: "Design & Development",
      imgUrl: funding,
      websiteUrl: "https://crowd-spark.vercel.app/"
    },
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
      title: "Discord-UI",
      description: "Design & Development",
      imgUrl: projImg5,
      websiteUrl:"https://discord-ui-clone-three.vercel.app/"
    },
    {
      title: "Modern-Chair",
      description: "Design & Development",
      imgUrl: projImg7,
      websiteUrl: "https://harshgoyal13.github.io/Modern-Chair/"
    },


  ];

  return (
    <section className="project" id="projects">
      <Container>
          <Row>
          <Col size={12}>
           
                <h2 className="purple">Projects</h2>
                <p>please click on the project to check the project sites.</p>

            
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
          </Col>
        </Row>
      </Container>
    </section>
  )
}
