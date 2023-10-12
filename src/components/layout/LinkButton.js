import { Link } from "react-router-dom";
import "./LinkButton.modules.css"; 

export default function LinkButton({to, text}) {
    return (
        <Link className="btn-dark" to={to}>{text}</Link>
    )
}
