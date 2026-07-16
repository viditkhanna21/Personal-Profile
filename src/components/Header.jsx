import { Link } from "react-router-dom";
import { useContext } from "react";
import ProfileContext from "../context/ProfileContext";

function Header() {
  const { darkMode, setDarkMode } = useContext(ProfileContext);

  return (
    <header className="bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 gap-4">

        <h1 className="text-3xl font-bold tracking-wide">
          My Personal Portfolio
        </h1>

        <nav className="flex flex-wrap justify-center items-center gap-3">

          <Link to="/">
            <button className="px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Home
            </button>
          </Link>

          <Link to="/skills">
            <button className="px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Skills
            </button>
          </Link>

          <Link to="/hobbies">
            <button className="px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Hobbies
            </button>
          </Link>

          <Link to="/contact">
            <button className="px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Contact
            </button>
          </Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition duration-300"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

        </nav>

      </div>
    </header>
  );
}

export default Header;