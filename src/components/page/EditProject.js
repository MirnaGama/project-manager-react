import { parse, v4 as uuidv4 } from "uuid";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";
import baseConnection from "../../config/baseConnection";
import { sendErrorToast, sendSuccessToast } from "../util/Toast";

import ProjectForm from "../layout/ProjectForm";

import "./EditProjects.modules.css";
import ServiceForm from "../layout/ServiceForm";

export default function EditProject() {
  const { id } = useParams();
  const [project, setProject] = useState();
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);

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

  const toggleServiceForm = () => setShowServiceForm(!showServiceForm);

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
      })
      .catch((err) => {
        sendErrorToast("Network error. Try again later");
      });
  };

  const createService = (project) => {
    // get last service for validation
    const lastService = project.services.pop();

    lastService.id = uuidv4();

    const newCost = parseFloat(lastService.cost) + parseFloat(project.cost);

    if (newCost > parseFloat(project.budget)) {
      sendErrorToast(
        "Maximum budget exceeded. Please check the cost of the service"
      );
      return false;
    }

    project.services.push(lastService);
    project.cost = newCost;

    // update project
    editProject(project);

    toggleServiceForm();
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
          <div className="edit_project_services mt-3">
            <h3>Services</h3>
            <Button onClick={toggleServiceForm} variant="dark">
              {!showServiceForm ? "Add Service" : "Close"}
            </Button>
          </div>
          {!showServiceForm ? (
            <div className="mt-5">
              <p>My services...</p>
            </div>
          ) : (
            <ServiceForm
              handleSubmit={createService}
              btnText="Add Service"
              projectData={project}
            />
          )}
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
