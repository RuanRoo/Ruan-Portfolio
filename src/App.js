import "./App.css";
import About from "./Components/About";
import Knowledge from "./Components/Knowledge";
import Landing from "./Components/Landing";
import Navbar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";


import { BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Landing />
        <Navbar />
        <About />
        <Knowledge />
        <Projects />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
