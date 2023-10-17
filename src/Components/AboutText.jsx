import arrow from "../Assets/Arrow1.png";
import { HashLink as Link } from "react-router-hash-link";

const AboutText = () => {

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
    <div className="aboutContainer">
      <div className="aboutTextDiv">
        <div className="overflowHidden">
          <p className="dropFirst">
            I am a frontend Developer based in Cape Town, South Africa. I am
            passionate about creating intuitive dynamic user interfaces using
            the newest frontend technologies and driving online traffic.
          </p>
        </div>
        <div className="overflowHidden">
          <p className="dropSecond">
            My interest in web development was sparked by the endless
            opportunities and creative side of the industry while working full
            time as a workflow manager. At the start of 2022 I enrolled into a
            full stack web dev bootcamp at HyperionDev. I graduated at the top
            of my class after which I completed a 3 month contract as a web
            developer with 4Shaw Productions.
          </p>
        </div>
        <Link to="#projects" smooth>
          <img
            src={arrow}
            className="aboutArrow"
            alt="down arrow"
            data-aos="fade-right"
            data-aos-duration="800"
          />
        </Link>
      </div>
      <div className="aboutTextDiv2">
        <div className="overflowHidden">
          <p className="dropThird">
            I am continuously pushing myself to improve my programming and
            design skills so I can join a team of like-minded individuals to
            create magic together. Although my passion is frontend development,
            I have put pen to paper during a design process, been completely
            lost in a full stack environment, and have even worn the
            entrepreneurship hat.
          </p>
        </div>
        <div className="overflowHidden">
          <p className="dropFourth">
            My day-to-day life includes at least 2 cups of coffee, a few dev
            tutorials and walks in the park with my wife and golden retriever.
          </p>
        </div>
        <button onClick={onClick} className="cvButton">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default AboutText;
