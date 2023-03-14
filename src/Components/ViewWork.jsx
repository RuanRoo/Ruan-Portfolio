import { HashLink as Link } from "react-router-hash-link";
import arrow from "../Assets/Arrow1.png"

function ViewWork() {
  return (
    <div className="viewWorkContainer">
        <Link to="#about" smooth>
              <div className="viewWorkDiv">
                <h4 className="viewWork">
                  more about me
                </h4>
                <img src={arrow} className="arrow" alt="" />
              </div>
            </Link>
    </div>
  )
}

export default ViewWork