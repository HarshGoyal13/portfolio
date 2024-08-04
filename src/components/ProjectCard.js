import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, websiteUrl, width, height }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={{ width: "350px", height: "240px" }}>
        <img src={imgUrl} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <a rel="noopener noreferrer" className="proj-txtx no-underline text-white w-full h-full flex items-center justify-center flex-col" href={websiteUrl} target='_blank'>
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </a>
      </div>
    </Col>
  )
}
