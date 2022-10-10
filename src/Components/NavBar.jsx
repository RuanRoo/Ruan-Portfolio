import { HashLink as Link} from "react-router-hash-link";

const Navbar = () => {


  
  return (
    <nav className="nav" id="nav">
      
      <ul>
      <Link to="#home">
        <li>
          home
        </li>
        </Link>
        <Link to="#about" smooth>
        <li>
          about
        </li>
        </Link>
        <Link to="#skills" smooth>
        <li>
          skills
        </li>
        </Link>
        <Link to="#projects" smooth>
        <li>
          projects
        </li>
        </Link>
        <Link to="#contact" smooth>
          <li>
            contact me
          </li>
        </Link>
      </ul>
    </nav>
  );
};
export default Navbar;
