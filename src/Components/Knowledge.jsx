import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

const Knowledge = () => {
  const [isVisible, setIsVisible] = useState();
  const myRef = useRef();
  console.log(isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
    console.log(myRef.current);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: false,
    });
  });

  //  const renderElement = () => {
  //     if(isVisible === true) {
  //       return (

  //       )
  //     }
  //   }

  return (
    <div className="skillsContainer" id="skills">
      <div className="skillsTitle">
        <h2
          data-aos="fade-right"
          data-aos-offset="400"
          data-aos-duration="800"
          className="aboutTitle"
        >
          skills
        </h2>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="600"
          data-aos-offset="400"
          className="underlineSkills"
        ></div>
      </div>
      <div ref={myRef} data-aos="zoom-in" className="skills">
        {isVisible && (
          <div className="skillsWrapper">
            <div className="sklilsProgress">
              <h2 className="skillsSubTitle1">technical competencies</h2>
              <div className="line line1">
                <h3 className="skillName">HTML / CSS</h3>
              </div>

              <div className="line line2">
                <h3 className="skillName">React</h3>
              </div>

              <div className="line line3">
                <h3 className="skillName">JavaScript</h3>
              </div>

              <div className="line line4">
                <h3 className="skillName">Node.js</h3>
              </div>

              <div className="line line5">
                <h3 className="skillName">Express.js</h3>
              </div>

              <div className="line line6">
                <h3 className="skillName">MongoDB</h3>
              </div>

              <div className="line line7">
                <h3 className="skillName">Next.js</h3>
              </div>

              <div className="line line8">
                <h3 className="skillName">jQuery</h3>
              </div>
            </div>
            <div className="sklilsProgress">
              <h1 className="skillsSubTitle2">soft skills</h1>
              <div className="softSkillWrapper">
                <div
                  className="skillCard"
                  data-aos="fade-left"
                  data-aos-offset="400"
                  data-aos-duration="800"
                >
                  <h4>workflow management</h4>
                  <p className="softPar">
                    as an experienced workflow manager, i can look at the
                    workload of a particular project and implement steps to meet
                    the target.
                  </p>
                </div>
                <div className="skillCard" data-aos="fade-left"
                  data-aos-offset="400"
                  data-aos-duration="800"
                  data-aos-delay="300">
                  <h4>problem solving</h4>
                  <p className="softPar">
                    i am able to step back from a problem to get broader
                    perspective, which helps me to find a solution.
                  </p>
                </div>
                <div className="skillCard" data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="600">
                  <h4>teamwork</h4>
                  <p className="softPar">
                    i have worked in various teams of different sizes, and do well with colloboration and teamwork.
                  </p>
                </div>
                <div className="skillCard" data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="900">
                  <h4>communication</h4>
                  <p className="softPar">
                    i worked 100% remotely for 2 years in a senior and
                    management role in which communication was key.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Knowledge;
