import Typewriter from "./Typewriter";
import { useState, useEffect } from "react";

const Logo = () => {

  const [showComponent, setShowComponent] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setShowComponent(true)

    }, 1500);
  }, []);

  return (
          <div className="logo">
            <h1>
              Hi, I'm <br /> Ruan Radyn
            </h1>
            {showComponent && <Typewriter />}
          </div>
          
  );
};
export default Logo;
