import { Link } from "react-router-dom";
import { useContext } from "react";
import ProfileContext from "../context/ProfileContext";

function Header() {
  const { darkMode, setDarkMode } = useContext(ProfileContext);
  return (

    
    <header className="header">
      <h1>My Personal Profile</h1>

      <nav>

        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/skills">
          <button>Skills</button>
        </Link>

        <Link to="/hobbies">
          <button>Hobbies</button>
        </Link>

        <Link to="/contact">
          <button>Contact</button>
        </Link>
      

        <button
          className="dark-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

      </nav>
    </header>
  );
}

export default Header;