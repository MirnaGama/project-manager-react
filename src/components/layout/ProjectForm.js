import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import baseConnection from "../../config/baseConnection";
import { useEffect, useState } from "react";

export default function ProjectForm({ btnText, handleSubmit, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    baseConnection
      .get("/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleProjectFormSubmit = (e) => {
    e.preventDefault();

    handleSubmit(project);
  }
   
  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleCategory = (e) => {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  };

  return (
    <Form onSubmit={handleProjectFormSubmit}>
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter the project name"
          onChange={handleChange}
          value={project.name ? project.name : ''}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          name="budget"
          placeholder="Enter a maximum budget"
          onChange={handleChange}
          value={project.budget ? project.budget : ''}
        />
      </Form.Group>
      <Form.Select className="mb-4" onChange={handleCategory} value={project.category ? project.category.id : ''}>
        <option>Select a category</option>
        {categories.map((option) => {
          return (
            <option value={option.id} key={option.id}>
              {option.name}
            </option>
          );
        })}
      </Form.Select>
      <Button variant="dark" type="submit">
        {btnText}
      </Button>
    </Form>
  );
}
