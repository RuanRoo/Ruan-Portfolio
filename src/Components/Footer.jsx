import logo from "../Assets/logo.png";
import email from "../Assets/email.png";
import phone from "../Assets/phone.png";
import arrow from "../Assets/Arrow4.png";

import { HashLink as Link } from "react-router-hash-link";

function Footer() {
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <div className="footer">
      <div className="footerLogo">
        <div className="spacer"></div>
        <img src={logo} className="ruanLogo" alt="" />
      </div>
      <hr />
      <div className="footerContainer">
        <div className="contactDetails">
          <div className="email">
            <div>
              <img src={email} className="emailImage" alt="" />
            </div>
            <p>
              <Mailto
                email="radyn00@gmail.com"
                subject="from portfolio"
                body="Hi Ruan"
              >
                radyn00@gmail.com
              </Mailto>
            </p>
          </div>
          <div className="email">
            <div>
              <img src={phone} className="emailImage" alt="" />
            </div>
            <p>
              <Link to="tel:+27793197509">079 319 7509</Link>
            </p>
          </div>
        </div>
        <Link to="#home">
          <div className="backToTop">
            <h4>back to top</h4>
            <img src={arrow} className="arrow1" alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
