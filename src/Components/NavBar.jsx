import { HashLink as Link } from "react-router-hash-link";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 650) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const [navbarOpen, setNavbarOpen] = useState(false);

  const ref = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (
        navbarOpen &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
    };
  }, [navbarOpen]);

  return (
    <div>
      <nav className={colorChange ? "nav colorChange" : "nav"} id="nav">
        <ul>
          <Link to="#home">
            <li>HOME</li>
          </Link>
          <Link to="#about" >
            <li>ABOUT</li>
          </Link>
          <Link to="#projects" >
            <li>WORK</li>
          </Link>
          <Link to="#skills" >
            <li>SKILLS</li>
          </Link>
          <Link to="#contact" >
            <li>CONTACT ME</li>
          </Link>
        </ul>
      </nav>
      <nav  ref={ref} className={colorChange ? "mobileNav colorChange" : "mobileNav"}>
        <button
          className="toggle"
          onClick={() => setNavbarOpen((prev) => !prev)}
        >
          {navbarOpen ? "X" : 
        <svg
        width="44"
        height="18"
        viewBox="0 0 44 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          className="line"
          y1="17"
          x2="11"
          y2="17"
          stroke="white"
          stroke-width="2"
        />
        <line
          className="white"
          y1="9"
          x2="27"
          y2="9"
          stroke="white"
          stroke-width="2"
        />
        <line
          className="line"
          y1="1"
          x2="44"
          y2="1"
          stroke="white"
          stroke-width="2"
        />
      </svg>
      }
        </button>
        
        <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
          <Link to="#home"
          onClick={() => setNavbarOpen(false)}>
            <li>HOME</li>
          </Link>
          <hr  />
          <Link to="#about" 
          onClick={() => setNavbarOpen(false)}>
            <li>ABOUT</li>
          </Link>
          <hr  />
          <Link to="#projects" 
          onClick={() => setNavbarOpen(false)}>
            <li>WORK</li>
          </Link>
          <hr  />
          <Link to="#skills" 
          onClick={() => setNavbarOpen(false)}>
            <li>SKILLS</li>
          </Link>
          <hr  />
          <Link to="#contact" 
          onClick={() => setNavbarOpen(false)}>
            <button className="contactButton">CONTACT ME</button>
          </Link>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
