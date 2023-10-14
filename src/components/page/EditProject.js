import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import baseConnection from "../../config/baseConnection";
import { sendErrorToast, sendSuccessToast } from "../util/Toast";

import ProjectForm from "../layout/ProjectForm";

import "./EditProjects.modules.css";

export default function EditProject() {
  const { id } = useParams();
  const [project, setProject] = useState();
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    baseConnection
      .get("projects/" + id)
      .then((response) => {
        setProject(response.data);
      })
      .catch((err) => {
        sendErrorToast("Network error. Try again later");
      });
  });

  const toggleProjectForm = () => setShowProjectForm(!showProjectForm);

  const editProject = (project) => {
    if (project.budget < project.cost) {
      sendErrorToast(
        "The maximum budget cannot be less than the total cost of the project"
      );
      return;
    }

    baseConnection
      .put("projects/" + id, project)
      .then((response) => {
        sendSuccessToast("Project edited successfully!");
        setProject(response.data);
        toggleProjectForm();
      })
      .catch((err) => {
        sendErrorToast("Network error. Try again later");
      });
  };

  return (
    <>
      {project?.name ? (
        <div className="edit_project_details">
          <div className="edit_project_details_container">
            <h2>Project: {project.name}</h2>
            <Button onClick={toggleProjectForm} variant="dark">
              {!showProjectForm ? "Edit Project" : "Close"}
            </Button>
            {!showProjectForm ? (
              <div className="edit_project_info">
                <p>
                  <span>Category: </span> {project.category.name}
                </p>
                <p>
                  <span>Maximum Budget: </span> $ {project.budget}
                </p>
                <p>
                  <span>Total Cost: </span> {project.cost}
                </p>
              </div>
            ) : (
              <div className="edit_project_info">
                <ProjectForm
                  handleSubmit={editProject}
                  btnText="Edit Project"
                  projectData={project}
                ></ProjectForm>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Spinner
          animation="border"
          variant="dark"
          style={{ width: "100px", height: "100px", margin: "4em" }}
        />
      )}
    </>
  );
}
