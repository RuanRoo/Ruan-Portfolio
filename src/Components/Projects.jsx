import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import capitalExpress from "../Assets/capitalExpress.jpg";
import clubhouse from "../Assets/Clubhouse.png";
import budgetBuddy from "../Assets/budgetBuddy.png";
import excella from "../Assets/excella.png";
import almostSunday from "../Assets/almostSunday.png";
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
        <div className="projectSections2">
          <div className="projectDescription2">
            <h2>Excella</h2>
            <p>
              I was brought on board by{" "}
              <a href="https://www.4shaw.co/">4Shaw Productions</a> on a
              contract basis to take the lead in the development of this project
              from the ground up. Given the project's static nature, I crafted
              it using HTML, CSS, and vanilla JavaScript to ensure an efficient
              and seamless user experience. It was a fantastic chance for me to
              see a project through from start to finish and gain some valuable
              experience as a developer.
            </p>
            <a href="https://excella.co.za/" target="_blank" rel="noreferrer">
              view project
            </a>
          </div>
          <div className="projectImageDiv">
            <img src={excella} className="projectImage" alt="" />
          </div>
          <div className="number2">1.</div>
        </div>
        <div className="projectSectionsMobile">
          <div className="number2">1.</div>
          <div className="projectImageDiv">
            <img src={excella} className="projectImage" alt="" />
          </div>
          <div className="projectDescription2">
            <h2>Excella</h2>
            <p>
              I was brought on board by{" "}
              <a href="https://www.4shaw.co/">4Shaw Productions</a> on a
              contract basis to take the lead in the development of this project
              from the ground up. Given the project's static nature, I crafted
              it using HTML, CSS, and vanilla JavaScript to ensure an efficient
              and seamless user experience. It was a fantastic chance for me to
              see a project through from start to finish and gain some valuable
              experience as a developer.
            </p>
            <a href="https://excella.co.za/" target="_blank" rel="noreferrer">
              view project
            </a>
          </div>
        </div>
        <div className="projectSections">
          <div className="number">2.</div>
          <div className="projectImageDiv">
            <img src={capitalExpress} className="projectImage" alt="" />
          </div>
          <div className="projectDescription">
            <h2>Capital Express</h2>
            <p>
              This is another project where I was the lead developer while
              working on contract for
              <a href="https://www.4shaw.co/">4Shaw Productions</a>. It is an
              understated yet functional Cash Advance solution website that was
              built in Wordpress using Elementor and some custom CSS and
              Javascript.
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
            <h2>
              Clubhouse <br /> <span>online betting</span>
            </h2>
            <p>
              This is a small NextJS project I did that consists of a Landing
              page and mock login/sign-up functionality. All text comes from an
              API endpoint, the Login/Sign-up CTA buttons opens up a modal, it
              sends a mock sign in request to an external API that returns info
              of John Doe and after a successful request, a message welcomes
              back the user.
            </p>
            <a
              href="https://nextjs-mock-landing-page.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              view project
            </a>
          </div>
          <div className="projectImageDiv">
            <img src={clubhouse} className="projectImage" alt="" />
          </div>
          <div className="number2">3.</div>
        </div>
        <div className="projectSectionsMobile">
          <div className="number2">3.</div>
          <div className="projectImageDiv">
            <img src={clubhouse} className="projectImage" alt="" />
          </div>
          <div className="projectDescription2">
            <h2>
              Clubhouse <br /> <span>online betting</span>
            </h2>
            <p>
              This is a small NextJS project I did that consists of a Landing
              page and mock login/sign-up functionality. All text comes from an
              API endpoint, the Login/Sign-up CTA buttons opens up a modal, it
              sends a mock sign in request to an external API that returns info
              of John Doe and after a successful request, a message welcomes
              back the user.
            </p>
            <a
              href="https://nextjs-mock-landing-page.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              view project
            </a>
          </div>
        </div>
        <div className="projectSections">
          <div className="number">4.</div>
          <div className="projectImageDiv">
            <img src={budgetBuddy} className="projectImage" alt="" />
          </div>
          <div className="projectDescription">
            <h2>Budget Buddy</h2>
            <p>
              This is another fun personal project I did to learn the new
              featers of React Router and also to try out Vite together with
              React. It is a simple frontend budgeting app that saves user data
              to Local Storage that allows you to create budgets and helps you
              track your expenses.
            </p>
            <a
              href="https://main--splendorous-licorice-1e655b.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              view project
            </a>
          </div>
        </div>
        <div className="projectSections2">
          <div className="projectDescription2">
            <h2>Almost Sunday</h2>
            <p>
              This project represents a collaborative effort between a UI/UX
              designer and myself. I took charge of developing her portfolio
              while she worked on designing mine. The entire project was
              executed using React and includes complex layouts and micro
              interactions.
            </p>
            <a
              href="https://www.almostsunday.co.za/"
              target="_blank"
              rel="noreferrer"
            >
              view project
            </a>
          </div>
          <div className="projectImageDiv">
            <img src={almostSunday} className="projectImage" alt="" />
          </div>
          <div className="number2">5.</div>
        </div>
        <div className="projectSectionsMobile">
          <div className="number2">5.</div>
          <div className="projectImageDiv">
            <img src={almostSunday} className="projectImage" alt="" />
          </div>
          <div className="projectDescription2">
            <h2>Almost Sunday</h2>
            <p>
              This project represents a collaborative effort between a UI/UX
              designer and myself. I took charge of developing her portfolio
              while she worked on designing mine. The entire project was
              executed using React and includes complex layouts and micro
              interactions.
            </p>
            <a
              href="https://www.almostsunday.co.za/"
              target="_blank"
              rel="noreferrer"
            >
              view project
            </a>
          </div>
        </div>
        <Link to="#contact">
          <br />
          <div className="hireButton">hire me</div>
        </Link>
      </div>
    </div>
  );
};
export default Projects;
