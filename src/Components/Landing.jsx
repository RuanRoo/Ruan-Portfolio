import Logo from "./Logo";
import Bulb from "../Assets/escalator2.jpg"
import { useEffect, useState } from "react";

const Landing = () => {

    const [showComponent, setShowComponent] = useState(false)

    useEffect(() => {
      setInterval(() => {
        setShowComponent(true)

      }, 1000);
    }, []);


  return (
    <div className="landing" id="home">
      <img className="heroImage" src={Bulb} alt="Hero" />
      {showComponent && <Logo />}
    </div>
  );
};
export default Landing;
