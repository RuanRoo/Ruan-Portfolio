import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import capitalExpress from "../Assets/capitalExpress.jpg";
import meditate from "../Assets/meditate.jpg";
import { HashLink as Link } from "react-router-hash-link";

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
          data-aos-offset="200"
          data-aos-duration="600"
          className="projectTitle"
        >
          recent
        </h2>
        <h2
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-duration="1200"
          data-aos-delay="800"
          className="projectTitle"
        >
          work
        </h2>
        <div
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="400"
          data-aos-offset="300"
          className="underline2"
        ></div>
      </span>
      <div className="projects">
        <div className="projectSections">
          <div className="number">1.</div>
          <div className="projectImageDiv">
            <img src={capitalExpress} className="projectImage" alt="" />
          </div>
          <div className="projectDescription">
            <h2>Capital Express</h2>
            <p>
              I was the lead developer on this projects while working on a
              contract for 4Shaw Productions. It is an understated yet
              functional websoite that was built in Wordpress using Elementor
              and some custom CSS and Javascript.
            </p>
            <a
              href="https://capitalexpress.co.za/"
              target="_blank"
              rel="noreferrer"
            >
              view project
            </a>
          </div>
        </div>
        <div className="projectSections2">
          <div className="projectDescription2">
            <h2>Meditate</h2>
            <p>
              I was the lead developer on this projects while working on a
              contract for 4Shaw Productions. It is an understated yet
              functional websoite that was built in Wordpress using Elementor
              and some custom CSS and Javascript.
            </p>
            <a
              href="https://rainbow-lolly-327dad.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              view project
            </a>
          </div>
          <div className="projectImageDiv">
            <img src={meditate} className="projectImage" alt="" />
          </div>
          <div className="number2">2.</div>
        </div>
        <div className="projectSectionsMobile">
          <div className="number2">2.</div>
          <div className="projectImageDiv">
            <img src={meditate} className="projectImage" alt="" />
          </div>
          <div className="projectDescription2">
            <h2>Meditate</h2>
            <p>
              I was the lead developer on this projects while working on a
              contract for 4Shaw Productions. It is an understated yet
              functional websoite that was built in Wordpress using Elementor
              and some custom CSS and Javascript.
            </p>
            <a
              href="https://rainbow-lolly-327dad.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              view project
            </a>
          </div>
        </div>
        <div className="projectSections">
          <div className="number">3.</div>
          <div className="projectImageDiv">
            <img src={capitalExpress} className="projectImage" alt="" />
          </div>
          <div className="projectDescription">
            <h2>Capital Express</h2>
            <p>
              I was the lead developer on this projects while working on a
              contract for 4Shaw Productions. It is an understated yet
              functional websoite that was built in Wordpress using Elementor
              and some custom CSS and Javascript.
            </p>
            <a href="https://capitalexpress.co.za/">view project</a>
          </div>
        </div>
        <Link to="#contact">
        <div className="hireButton">hire me</div>
        </Link>
      </div>
    </div>
  );
};
export default Projects;
