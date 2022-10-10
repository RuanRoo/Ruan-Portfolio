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
              Hi, <span className="name"> I'm Ruan.</span>
            </h1>
            {showComponent && <Typewriter />}
          </div>
          
  );
};
export default Logo;
