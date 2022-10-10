import github from "../Assets/github.png";
import linkedin from "../Assets/linkedin.png";
import blogger from "../Assets/blogger.png";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

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
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
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
    <div id="contact" className="contact">
      <div className="contactForm" data-aos="zoom-in-up">
        <h1 className="contactTitle">get in touch</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label className="label">your name:</label> <br />
          <input className="input" type="text" name="from_name" /> <br />
          <br />
          <label className="label">your email:</label> <br />
          <input className="input" type="email" name="from_email" /> <br />
          <br />
          <label className="label" name="message">
            message:
          </label>{" "}
          <br />
          <textarea className="inputMessage" name="message"></textarea> <br />
          <button className="button" type="submit">
            send
          </button>
          <br />
          <br />
          <div className="center">
            <span className="emailMe">
              <p>not a fan of forms? &nbsp;</p>
              <Mailto
                email="foo@bar.baz"
                subject="from portfolio"
                body="Hi Ruan"
              >
                <b>Mail me</b>
              </Mailto>
              <p>&nbsp;direct</p>
            </span>
          </div>
        </form>
      </div>
      <div className="socials">
        <div className="socialHeading">
          <h1>find me on socials</h1>
          <p>
            to view some of my actual code, visit my github page linked below.
            You can also find me on LinkedIn and have a look at my blog.
          </p>
        </div>
        <div
          className="socialIcons"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="400"
        >
          <a href="https://github.com/RuanRoo" target="_blank" rel="noreferrer">
            <div className="github">
              <img src={github} alt="" />
            </div>
          </a>
          <a
            href="https://linkedin.com/in/ruan-radyn-2998971a4"
            target="_blank"
            rel="noreferrer"
          >
            <div className="linkedin">
              <img src={linkedin} alt="" />
            </div>
          </a>
          <a
            href="https://ruanradyn.blogspot.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="blog">
              <img src={blogger} alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;
