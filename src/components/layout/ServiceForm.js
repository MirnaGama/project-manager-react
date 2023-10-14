import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

export default function ServiceForm({ btnText, handleSubmit, projectData }) {
  const [service, setService] = useState({});

  const handleServiceFormSubmit = (e) => {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }
   
  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  return (
    <Form onSubmit={handleServiceFormSubmit} className="mt-3">
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter the service name"
          onChange={handleChange}
          value={service.name ? service.name : ''}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control
          type="number"
          name="cost"
          placeholder="Enter a cost"
          onChange={handleChange}
          value={service.cost ? service.cost : ''}
        />
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Control
          type="text"
          name="description"
          placeholder="Describe the service"
          onChange={handleChange}
          value={service.description ? service.description : ''}
        />
      </Form.Group>
      <Button variant="dark" type="submit">
        {btnText}
      </Button>
    </Form>
  );
}
