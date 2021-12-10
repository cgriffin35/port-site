import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

interface Project {
  title: string;
  pic: string;
  description: string;
  url: string;
  stack: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <>
      <style>
        {`
          .btn-outline-gold {
            background-color: transparent;
            color: #CBB26B;
            border: 2px solid
          }
        `}
      </style>

      <div id="projects" className="m-2 p-2">
        <div className="d-flex justify-content-center">
          <h1 className="d-inline-block p-5 display-4 text-dark">
            <strong id="projectText">Projects</strong>
          </h1>
        </div>
        <Container className="p-5 text-light fs-5">
          <Row sm={1} lg={3} className="g-4">
            {projects.map((project) => (
              <Col key={project.title}>
                <Card id="card" className="h-100">
                  <Card.Img src={project.pic} variant="top" />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="fs-6">
                      {project.description}
                    </Card.Text>
                    <Stack direction="horizontal" className="d-flex flex-wrap">
                      {project.stack.map((code) => (
                        <div key={code}>
                          <p id="skillsList" className="d-inline-flex fs-6">
                            {code}
                          </p>
                        </div>
                      ))}
                    </Stack>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      <button className="my-3 justify-content-end btn btn-outline-gold">
                        View
                      </button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Projects;
