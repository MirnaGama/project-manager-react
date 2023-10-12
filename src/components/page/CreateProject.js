import { Button, Form } from "react-bootstrap";
import "./CreateProject.modules.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import baseConnection from "../../config/baseConnection";

export default function CreateProject() {

  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState({});

  const createNewProject = (project) => {
    project.cost = 0;
    project.services = [];

    baseConnection.post('/projects', project).then(
      (response) => {
       // message here
      }
    ).catch(err => console.log(err));
  }

  useEffect(() => {
    baseConnection.get('/categories').then((response) => {
      setCategories(response.data);
    }).catch(err => console.log(err));
}, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    createNewProject(project);
  }

  const handleChange = (e) => {
    setProject({...project, [e.target.name]: e.target.value});
  }

  const handleCategory = (e) => {
    setProject({...project, category: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text
    }});
  }


  return (
    <div className="create_project_container">
      <h4>Create new project</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-4">
          <Form.Control type="text" name="name" placeholder="Enter the project name" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control type="text" name="budget" placeholder="Enter a maximum budget" onChange={handleChange} />
        </Form.Group>
        <Form.Select className="mb-4" onChange={handleCategory}>
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