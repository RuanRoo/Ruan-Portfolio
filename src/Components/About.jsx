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

  const onClick = () => {
    fetch('RuanCV.pdf').then(response => {
      response.blob().then(blob => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'RuanCV.pdf';
        alink.click()
      })
    })
  }

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
            <span className="interest">my interest in web development...</span>{" "}
            <br />
            <br />
            started in 2020 while working full time as a workflow manager. as i
            started learning the basics, my interests grew, and i took the
            plunge at the start of 2022 to focus on my education as a developer
            full time. i enrolled into a full stack web dev bootcamp at
            HyperionDev in Feb 2022 and recently graduated at the top of my
            class. now I find myself as a junior in a completely new field at
            the age of 35 and I am excited for what lies ahead.
          </p>
          <p>
            even though I am starting out with no "on the job"
            experience, I consider myself a well rounded, mature person and have worked
            with many incredible companies both locally and internationally. i
            am continuously pushing myself to improve my programming and design
            skills so I can join a team of like-minded individuals to create
            magic together.
          </p>
          <p>
            though my passion is frontend development, i have put pen to paper
            during a design process, been completely lost in a full stack
            environment, and have even worn the entrepreneurship hat.
          </p>
          <button onClick={onClick} className="cvButton">Download CV</button>
        </div>
      </div>
    </div>
  );
};
export default About;
