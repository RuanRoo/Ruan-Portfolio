import profile from "../Assets/20220626_101046.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import arrow from "../Assets/Arrow1.png";
import { HashLink as Link } from "react-router-hash-link";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref: myRef, inView: isVisible } = useInView();

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: false,
    });
  });

  const onClick = () => {
    fetch("RuanCV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "RuanCV.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="about" id="about">
      <div className="imageDiv">
        <div className="aboutTitleDiv">
          <h2
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="800"
            className="aboutTitle"
          >
            about
          </h2>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="600"
            data-aos-offset="300"
            className="Aboutunderline"
          ></div>
        </div>
        <img src={profile} alt="profile" className="profilePhoto" />
      </div>
      <div ref={myRef} className="aboutTextDiv">
        {isVisible ? (
          <>
            <div className="overflowHidden">
              <p className="dropFirst">
              I am a frontend Developer based in Cape Town, South Africa. I am passionate about creating intuitive dynamic user interfaces using the newest frontend technologies and driving online traffic.
              </p>
            </div>
            <div className="overflowHidden">
              <p className="dropSecond">
              My interest in web development was sparked by the endless opportunities and creative side of the industry while working full time as a workflow manager. At the start of 2022, I enrolled into a full stack web dev bootcamp at HyperionDev. I graduated at the top of my class after which I completed a 3 month contract as a web developer with 4Shaw Productions.
              </p>
            </div>
          </>
        ) : (
          ""
        )}

        <Link to="#projects" smooth>
          <img
            src={arrow}
            className="aboutArrow"
            alt="down arrow"
            data-aos="fade-right"
            data-aos-delay="2500"
            data-aos-duration="1000"
            data-aos-offset="0"
          />
        </Link>
      </div>
      <div ref={myRef} className="aboutTextDiv2">
        {isVisible ? (
          <>
            <div className="overflowHidden">
              <p className="dropThird">
              I am continuously pushing myself to improve my programming and design skills, so I can join a team of like-minded individuals to create magic together. Although my passion is frontend development, I have put pen to paper during a design process, been completely lost in a full stack environment, and have even worn the entrepreneurship hat.
              </p>
            </div>
            <div className="overflowHidden">
              <p className="dropFourth">
              My day-to-day life includes at least a couple cups of coffee, working on personal dev projects and walks in the park with my wife and golden retriever.
              </p>
            </div>
            <button onClick={onClick} className="cvButton">
              Download CV
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default About;
