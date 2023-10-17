import github from "../Assets/github.png";
import linkedin from "../Assets/linkedin.png";
import blogger from "../Assets/blogger.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [status, setStatus] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7t9ky5g",
        "template_p1ts5bm",
        form.current,
        "A_Pj49r2fcYXr2Whx"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('success')
        
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      once: false,
    });
  });

  return (
    <div id="contact" className="contactContainer">
      <div className="contactTitleWrapper">
        <h2
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-duration="800"
          className="contactTitle"
        >
          Get in touch
        </h2>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="600"
          data-aos-offset="100"
          className="contactUnderline"
        ></div>
      </div>
      <div className="contact">
        <div className="contactForm" data-aos="zoom-in-up">
          <form ref={form} onSubmit={sendEmail}>
            <div className="labelDiv">
              <label className="label">Name</label> <br />
              <input className="input" type="text" name="from_name" /> <br />
            </div>
            <br />
            <div className="labelDiv">
              <label className="label">Email</label> <br />
              <input className="input" type="email" name="from_email" /> <br />
            </div>
            <br />
            <div className="labelDiv">
              <label className="label" name="message">
                Message
              </label> <br />
              <textarea className="inputMessage" name="message"></textarea>
              <br />
            </div>
            <div className="sendDiv">
              <button className="button" type="submit">
              {status && renderAlert()}
                send
              </button>
              <div className="center">
              <span className="emailMe">
                <p>not a fan of forms? &nbsp;</p>
                <Mailto
                  email="radyn00@gmail.com"
                  subject="from portfolio"
                  body="Hi Ruan"
                >
                  <b>Mail me</b>
                </Mailto>
                <p>&nbsp;direct</p>
              </span>
            </div>
            </div>
            <br />
            <br />
          </form>
        </div>
        <div className="socialContainer">
          <div className="socials">
            <div className="socialHeading">
              <h1>find me on socials</h1>
              <p>
                To view some of my code, visit my github page linked
                below. You can also find me on LinkedIn and have a look at my
                blog.
              </p>
            </div>
            <div
              className="socialIcons"
              data-aos="fade-left"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <a
                href="https://github.com/RuanRoo"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} className="github" alt="" />
              </a>
              <a
                href="https://linkedin.com/in/ruan-radyn-2998971a4"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} className="linkedin" alt="" />
              </a>
              <a
                href="https://ruanradyn.blogspot.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={blogger} className="blog" alt="" />
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

const renderAlert = () => (
  <div>
    &#x2713;
  </div>
)

export default Contact;
