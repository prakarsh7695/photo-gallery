import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import a from "../../Assets/Projects/1.jpg";
import b from "../../Assets/Projects/2.PNG";
import c from "../../Assets/Projects/3.PNG";
import d from "../../Assets/Projects/4.PNG";
import e from "../../Assets/Projects/5.PNG";
import f from "../../Assets/Projects/6.PNG";
import g from "../../Assets/Projects/7.PNG";
import h from "../../Assets/Projects/8.PNG";
import i from "../../Assets/Projects/9.PNG";
import j from "../../Assets/Projects/10.PNG";
import k from "../../Assets/Projects/11.PNG";
import l from "../../Assets/Projects/12.PNG";
import m from "../../Assets/Projects/13.PNG";
import n from "../../Assets/Projects/14.PNG";
import o from "../../Assets/Projects/15.PNG";
import p from "../../Assets/Projects/16.PNG";
import q from "../../Assets/Projects/17.PNG";
import r from "../../Assets/Projects/18.PNG";
import s from "../../Assets/Projects/19.PNG";
import t from "../../Assets/Projects/20.jpg";
import u from "../../Assets/Projects/21.PNG";
import v from "../../Assets/Projects/22.PNG";
import w from "../../Assets/Projects/23.PNG";
import x from "../../Assets/Projects/24.PNG";
import y from "../../Assets/Projects/25.PNG";
import z from "../../Assets/Projects/26.PNG";
import aa from "../../Assets/Projects/27.PNG";
import bb from "../../Assets/Projects/28.PNG";
import cc from "../../Assets/Projects/29.PNG";
import dd from "../../Assets/Projects/30.PNG";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Clicks </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a pictures I have clicked recently..
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={a}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={b}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={d}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={e}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={f}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={g}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={h}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={i}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={j}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={k}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={l}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={m}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={n}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={o}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={p}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={q}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={r}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={s}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={t}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={u}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={v}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={w}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={x}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={y}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={z}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aa}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bb}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cc}
              isBlog={false}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dd}
              isBlog={false}
            />
          </Col>

          
        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;
