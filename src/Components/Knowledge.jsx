import AOS from "aos";
import "aos/dist/aos.css";
import { SkillsData } from "./SkillsData";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import arrow2 from "../Assets/Arrow2.png";
import arrow3 from "../Assets/Arrow3.png";

const Knowledge = () => {
  const { ref: myRef, inView: isVisible } = useInView();

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: false,
    });
  });

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {

    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <div className="skillsContainer" id="skills">
      <div className="skillsTitle">
        <h2
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-duration="800"
          className="aboutTitle"
        >
          skills
        </h2>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="600"
          data-aos-offset="200"
          className="underlineSkills"
        ></div>
      </div>
      <div data-aos="zoom-in" className="skills">
        <div ref={myRef} className="skillsWrapper">
          {isVisible ? (
            <>
              <div className="skillsProgress">
                <div className="lineDiv">
                  <h3 className="skillName">HTML / CSS</h3>
                  <div className="barDiv">
                    <div className="line line1"></div>
                    <p>90%</p>
                  </div>
                </div>

                <div className="lineDiv">
                  <h3 className="skillName">REACT.JS</h3>
                  <div className="barDiv">
                    <div className="line line3"></div>
                    <p>80%</p>
                  </div>
                </div>
                <div className="lineDiv">
                  <h3 className="skillName">NEXT.JS</h3>
                  <div className="barDiv">
                    <div className="line line7"></div>
                    <p>60%</p>
                  </div>
                </div>
                <div className="lineDiv">
                  <h3 className="skillName">EXPRESS.JS</h3>
                  <div className="barDiv">
                    <div className="line line5"></div>
                    <p>40%</p>
                  </div>
                </div>
              </div>
              <div className="skillsProgress">
                <div className="lineDiv">
                  <h3 className="skillName">JAVASCRIPT</h3>
                  <div className="barDiv">
                    <div className="line line2"></div>
                    <p>85%</p>
                  </div>
                </div>
                <div className="lineDiv">
                  <h3 className="skillName">NODE.JS</h3>
                  <div className="barDiv">
                    <div className="line line4"></div>
                    <p>50%</p>
                  </div>
                </div>
                <div className="lineDiv">
                  <h3 className="skillName">MONGODB</h3>
                  <div className="barDiv">
                    <div className="line line6"></div>
                    <p>50%</p>
                  </div>
                </div>

                <div className="lineDiv">
                  <h3 className="skillName">TYPESCRIPT</h3>
                  <div className="barDiv">
                    <div className="line line8"></div>
                    <p>50%</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="softSkillWrapper">
        <div className="skillsTitle">
          <h2
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-duration="800"
            className="softSkillsTitle"
          >
            soft skills
          </h2>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="600"
            data-aos-offset="200"
            className="underlineSkills2"
          ></div>
        </div>
        <div className="faqAccordion">
          {SkillsData.map((item, i) => (
            <div className="faqItem" key={i}>
              <div
                className={
                  selected === i ? "faqQuestion selected" : "faqQuestion"
                }
                onClick={() => toggle(i)}
              >
                <p>{item.question}</p>
                <span>
                  {selected === i ? (
                    <img src={arrow3} alt="ip arrow" />
                  ) : (
                    <img src={arrow2} alt="down arrow" />
                  )}
                </span>
              </div>
              <div className={selected === i ? "faqAnswer show" : "faqAnswer"}>
                <div className="answer">{item.answer}</div>
              </div>
              <hr className="skillsLine" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Knowledge;
