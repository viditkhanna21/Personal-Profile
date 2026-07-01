function Header({ darkMode, setDarkMode }) {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="header">
      <h1>My Personal Profile</h1>

      <nav>
        <button onClick={() => scrollToSection("home")}>
          Home
        </button>

        <button onClick={() => scrollToSection("skills")}>
          Skills
        </button>

        <button onClick={() => scrollToSection("hobbies")}>
          Hobbies
        </button>

        <button onClick={() => scrollToSection("contact")}>
          Contact
        </button>

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