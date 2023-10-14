import "./ProjectCard.modules.css";
import { Button, Card, ListGroup } from "react-bootstrap";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, name, budget, category, handleRemove }) {
  
  const handleProjectCardRemove = (e) => {
    e.preventDefault();
    handleRemove(id);
  }
  
  
  return (
    <Card className="project_card m-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <b>Budget:</b> <MdAttachMoney /> {budget}
        </ListGroup.Item>
        <ListGroup.Item className="category_item">
          <span className={category?.toLowerCase()}></span> {category ? category : "No category"}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className="project_card_button_group">
        <Link to={`/edit-project/${id}`} className="btn btn-dark"><BsPencil/> Edit</Link>
        <Button className="btn btn-dark" onClick={handleProjectCardRemove}><BsFillTrashFill/> Remove</Button>
      </Card.Body>
    </Card>
  );
}
