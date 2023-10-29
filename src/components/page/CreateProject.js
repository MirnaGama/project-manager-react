import { useNavigate } from "react-router-dom";

import "./CreateProject.modules.css";
import "bootstrap/dist/css/bootstrap.css";
import ProjectForm from "../layout/ProjectForm";
import { sendErrorToast, sendSuccessToast } from "../util/Toast";
import ProjectService from "../../services/ProjectService";


export default function CreateProject() {

  const navigate = useNavigate();

  const createNewProject = (project) => {
      ProjectService.createProject(project).then((response) => {
        sendSuccessToast("Project created successfully!");
        navigate('/my-projects');
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
