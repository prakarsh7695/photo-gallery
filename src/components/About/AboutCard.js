import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prakarsh Sharma </span>
            from <span className="purple"> Lucknow, India.</span>
            <br />Here, I would like to mention that all the photos in gallery section are clicked by either <span class="purple">Samsung Galaxy A20 </span>(Which I lost :/) or now <span class="purple">Xiaomi Redmi 8</span> (Current). 
            <br />
            <br />
            For editing, I use either :
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> PicsArt
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Adobe Lightroom
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Adobe Photoshop
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>
            Also, the camera app I personally prefer is  <span className="purple">Google Camera </span>
            
            <br />
            <br />
           
          </p>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
