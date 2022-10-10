import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import beanWhere from "../Assets/beanWhere.jpg";
import cardGame from "../Assets/cardGame.jpg";
import todoList from "../Assets/todoList.jpg";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: false,
    });
  });

  return (
    <div id="projects">
      <span className="projectHeader">
        <h2
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-duration="600"
          className="projectTitle"
        >
          recent
        </h2>
        <h2
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-duration="1600"
          data-aos-delay="1500"
          className="projectTitle"
        >
          projects
        </h2>
      </span>
      <div className="projectSection">
        <div
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="400"
          data-aos-offset="500"
          className="underline2"
        ></div>
      </div>
      <div className="projects">
        <a href="https://bean-where.herokuapp.com/" target="_blank" rel="noreferrer">
        <div className="card">
          <h4 className="gameTitle">bean where?</h4>
          <div className="imageContainer">
            <img className="thumbnail" src={beanWhere} alt="image1" />
          </div>
          <p className="description">
            This is a kind of social media coffee app where users can share
            their favourite coffee spots in Cape Town. Built using the MERN
            stack with authentication.
          </p>
        </div>
        </a>
        <a href="https://ancient-spire-76695.herokuapp.com/" target="_blank" rel="noreferrer">
        <div className="card">
          <h4 className="gameTitle">memory game</h4>
          <div className="imageContainer">
            <img className="thumbnail" src={cardGame} alt="image2" />
          </div>
          <p className="description">
            This was just a simple card game I built to practice my skills, have
            fun!
          </p>
        </div>
        </a>
        <a href="https://mernstack-todo-list-with-auth.herokuapp.com/login" target="_blank" rel="noreferrer">
        <div className="card">
          <h4 className="gameTitle">todo list</h4>
          <div className="imageContainer">
            <img className="thumbnail" src={todoList} alt="image3" />
          </div>
          <p className="description">
            Fully functional todo list built using the MERN stack with
            authentication.
          </p>
        </div>
        </a>
      </div>
    </div>
  );
};
export default Projects;
