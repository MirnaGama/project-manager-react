import { Button, Form } from "react-bootstrap";
import "./CreateProject.modules.css";
import "bootstrap/dist/css/bootstrap.css";

export default function CreateProject() {
  return (
    <div className="create_project_container">
      <h4>Create new project</h4>
      <Form>
        <Form.Group className="mb-4">
          <Form.Control type="text" placeholder="Enter the project name" />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control type="text" placeholder="Enter a maximum budget" />
        </Form.Group>
        <Form.Select className="mb-4">
          <option>Select a category</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Button variant="dark" type="submit">
          Add new Project
        </Button>
      </Form>
    </div>
  )
}