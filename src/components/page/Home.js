import "./Home.modules.css";
import savings from '../../img/savings.svg';
import LinkButton from "../layout/LinkButton";

export default function Home() {
    return (<section className="home_container">
        <h1>Welcome to <span>Project Manager</span></h1>
        <p>Start right now</p>
        <LinkButton to="/create-project" text="Create a New project"/>
        <img src={savings} alt="savings"/>
    </section>)
}