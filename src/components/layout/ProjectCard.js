import "./ProjectCard.modules.css";
import { Button, Card, ListGroup } from "react-bootstrap";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";

export default function ProjectCard({ name, budget, category, handleRemove }) {
  return (
    <Card className="project_card">
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
        <Card.Link href="/" className="btn btn-dark"><BsPencil/> Edit</Card.Link>
        <Button className="btn btn-dark"><BsFillTrashFill/> Delete</Button>
      </Card.Body>
    </Card>
  );
}
