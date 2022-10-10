import profile from "../Assets/20220626_101046.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: false,
    });
  });

  return (
    <div className="about" id="about">
      <h2
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-duration="800"
        className="aboutTitle"
      >
        about
      </h2>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="600"
        data-aos-offset="400"
        className="underline"
      ></div>
      <div className="aboutDiv">
        <img src={profile} alt="profile" className="profilePhoto" />
        <div className="aboutText">
          <p>
            <span className="interest">My interest in web development...</span>{" "}
            <br />
            <br />
            started in 2020 while working full time as a workflow manager. As I
            started learning the basics, my interests grew, and I took the
            plunge at the start of 2022 to focus on my education as a developer
            full time. I enrolled into a full stack web dev bootcamp at
            HyperionDev in Feb 2022 and recently graduated at the top of my
            class. Now I find myself as a junior in a completely new field… 
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            tenetur, iure pariatur quaerat enim cum eveniet accusamus recusandae
            expedita optio consequuntur facilis non beatae atque! Provident qui
            et nulla cumque.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rerum
            eos soluta perferendis saepe expedita cumque aliquid repellat non
            sequi! Autem eos aut rerum iure debitis consectetur saepe veniam
            architecto.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
