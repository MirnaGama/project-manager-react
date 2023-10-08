import "./Home.modules.css";
import savings from '../../img/savings.svg';

export default function Home() {
    return (<section className="home_container">
        <h1>Welcome to <span>Project Manager</span></h1>
        <p>Start right now</p>
        <a href="/create-project">Create a New Project</a>
        <img src={savings} alt="savings"/>
    </section>)
}