import "./CreateProject.modules.css";
import "bootstrap/dist/css/bootstrap.css";
import baseConnection from "../../config/baseConnection";
import ProjectForm from "../layout/ProjectForm";
import { sendErrorToast, sendSuccessToast } from "../util/Toast";

export default function CreateProject() {
  const createNewProject = (project) => {
    project.cost = 0;
    project.services = [];

    baseConnection
      .post("/projects", project)
      .then((response) => {
        sendSuccessToast("Project created successfully!");
      })
      .catch((err) => {
        sendErrorToast("An unexpected error occured!");
      });
  };

  return (
    <div className="create_project_container">
      <h4>Create new project</h4>
      <ProjectForm btnText="Add new Project" handleSubmit={createNewProject} />
    </div>
  );
}
