import "./App.css";
import About from "./Components/About";
import Knowledge from "./Components/Knowledge";
import Landing from "./Components/Landing";
import Navbar from "./Components/NavBar";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";


import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Landing />
        <About />
        <Projects />
        <Knowledge />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
