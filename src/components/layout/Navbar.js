import { Link } from "react-router-dom";
import Container from "./Container";

import "./Navbar.modules.css";
import logo from "../../img/project-manager-logo.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Container>
        <Link to="/">
          <img src={logo} width="50" height="auto" alt="Project Managet" />
        </Link>
        <ul className="list">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/create-project">Create a New Project</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}
