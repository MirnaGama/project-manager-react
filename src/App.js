import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./components/page/Home";
import CreateProject from "./components/page/CreateProject";
import NotFound from "./components/page/error/NotFound";


function App() {
  return (

    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/create-project">Create a New Project</Link>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create-project" element={<CreateProject/>} />
        {/* Error route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer>Footer</footer>
    </Router>
  );
}

export default App;
