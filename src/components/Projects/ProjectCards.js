import React from "react";
import Card from "react-bootstrap/Card";

import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      
    </Card>
  );
}
export default ProjectCards;
