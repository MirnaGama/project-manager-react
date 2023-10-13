import "./ListProjects.modules.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

import baseConnection from "../../config/baseConnection";
import ProjectCard from "../layout/ProjectCard";
import { sendErrorToast } from "../util/Toast";

import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function ListProjects() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    baseConnection
      .get("/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((err) => {
        sendErrorToast("Network error. Try again later")
      });
  }, [projects]);

  return (
    <div className="list_projects_container">
      <div className="title_container">
        <h4>My Projects</h4>
        <LinkButton to="/create-project" text="New Project" />
      </div>

      <Container className="start">
        {projects ?
          projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                name={project.name}
                budget={project.budget}
                category={project.category?.name}
              />
            );
          }) : <Spinner animation="border" variant="dark" style={{ width: "100px", height: "100px", margin: "4em" }} />
          }
      </Container>
    </div>
  );
}
