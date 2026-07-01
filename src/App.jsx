import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const student = {
    name: "Vidit Khanna",
    course: "B.Tech",
    college: "South Asian University",
    description: "Building Websites."
  };

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  const hobbies = [
    "Cricket",
    "Coding"
  ];

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Profile
        name={student.name}
        course={student.course}
        college={student.college}
        description={student.description}
      />

      <Skills skills={skills} />

      <Hobbies hobbies={hobbies} />

      <Footer
        name={student.name}
        email="vidit.khanna21@gmail.com"
      />
    </div>
  );
}

export default App;