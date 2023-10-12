import { Button, Form } from "react-bootstrap";
import "./CreateProject.modules.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import baseConnection from "../../config/baseConnection";

export default function CreateProject() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    baseConnection.get('/categories').then((response) => {
      setCategories(response.data);
    });
}, []);


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
          {categories.map((option) => {
            return <option value={option.id} key={option.id}>{option.name}</option>
          })}
        </Form.Select>
        <Button variant="dark" type="submit">
          Add new Project
        </Button>
      </Form>
    </div>
  )
}