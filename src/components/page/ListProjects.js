import "./ListProjects.modules.css";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

import baseConnection from "../../config/baseConnection";
import ProjectCard from "../layout/ProjectCard";
import { sendErrorToast, sendSuccessToast } from "../util/Toast";

import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function ListProjects() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = () => {
    baseConnection
    .get("/projects")
    .then((response) => {
      setProjects(response.data);
    })
    .catch((err) => {
      sendErrorToast("Network error. Try again later")
    });
  }
  
  function removeProject(id) {
    baseConnection
      .delete(`/projects/${id}`).then(response => {
        sendSuccessToast("Project successfully deleted!");
        getProjects();
      })
      .catch((err) => {
        sendErrorToast("Network error. Try again later")
      });
  }

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
                id={project.id}
                name={project.name}
                budget={project.budget}
                category={project.category?.name}
                handleRemove={removeProject}
              />
            );
          }) : <Spinner animation="border" variant="dark" style={{ width: "100px", height: "100px", margin: "4em" }} />
          }
      </Container>
    </div>
  );
}
