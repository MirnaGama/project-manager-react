import "./ListProjects.modules.css";
import LinkButton from "../layout/LinkButton";

import ProjectCard from "../layout/ProjectCard";
import { sendErrorToast, sendSuccessToast } from "../util/Toast";

import { Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import ProjectService from "../../services/ProjectService";

export default function ListProjects() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = () => {
    ProjectService.getProjects()
    .then((response) => {
      setProjects(response.data);
    })
    .catch((err) => {
      sendErrorToast("Network error. Try again later")
    });
  }
  
  function removeProject(id) {
    ProjectService.deleteProject(id).then(response => {
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

      <div className="card_row">
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
      </div>
    </div>
  );
}
