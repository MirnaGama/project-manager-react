import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/page/Home";
import CreateProject from "./components/page/CreateProject";
import ListProjects from "./components/page/ListProjects";
import NotFound from "./components/page/error/NotFound";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (

    <Router>
      <Navbar/>
      <Container>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/create-project" element={<CreateProject/>} />
        <Route exact path="/my-projects" element={<ListProjects/>} />
        {/* Error route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Container>
      <ToastContainer/>
      <Footer/>
    </Router>
  );
}

export default App;
