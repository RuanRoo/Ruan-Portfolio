import { HashLink as Link } from "react-router-hash-link";

function ViewWork() {
  return (
    <div>
        <Link to="#nav" smooth>
              <div className="viewWorkDiv">
                <h4 className="viewWork">
                  more about me <span className="arrow"> &#8594; </span>
                </h4>
              </div>
            </Link>
    </div>
  )
}

export default ViewWork