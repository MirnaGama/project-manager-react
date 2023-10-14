import "./ProjectCard.modules.css";
import { Button, Card, ListGroup } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";

export default function ServiceCard({ id, name, cost, description, handleRemove }) {
  
  const handleProjectCardRemove = (e) => {
    e.preventDefault();
    handleRemove(id, cost);
  }
  
  
  return (
    <Card className="project_card m-3">
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <b>Cost:</b> <MdAttachMoney /> {cost}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Card.Text>
          {description}
        </Card.Text>
        <Button className="btn btn-dark" onClick={handleProjectCardRemove}><BsFillTrashFill/> Remove</Button>
      </Card.Body>
    </Card>
  );
}
