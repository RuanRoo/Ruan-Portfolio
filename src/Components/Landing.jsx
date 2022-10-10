import Logo from "./Logo";
import video from "../Assets/Sequence 01_1.mp4"
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
      <video src={video} autoPlay loop className="video"/>
      {showComponent && <Logo />}
    </div>
  );
};
export default Landing;
