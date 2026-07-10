import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";

import Home from "./pages/Home";
import SkillsPage from "./pages/SkillsPage";
import HobbiesPage from "./pages/HobbiesPage";
import Contact from "./pages/Contact";
import { getProfileData } from "./api/fakeApi";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const [student, setStudent] = useState(null);

const [skills, setSkills] = useState([]);

const [hobbies, setHobbies] = useState([]);

const [loading, setLoading] = useState(true);


useEffect(() => {

  async function loadData() {

    const data = await getProfileData();

    setStudent(data.student);

    setSkills(data.skills);

    setHobbies(data.hobbies);

    setLoading(false);

  }

  loadData();

}, []);
if (loading) {
  return <h1>Loading Profile...</h1>;
}

  return (
    <BrowserRouter>

      <div className={darkMode ? "dark" : "light"}>

        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <Routes>

          <Route
            path="/"
            element={
              <Home
                student={student}
                setStudent={setStudent}
              />
            }
          />

         <Route
  path="/skills"
  element={
    <SkillsPage
      skills={skills}
      setSkills={setSkills}
    />
  }
/>

<Route
  path="/hobbies"
  element={
    <HobbiesPage
      hobbies={hobbies}
      setHobbies={setHobbies}
    />
  }
/>

<Route
  path="/contact"
  element={
    <Contact
      student={student}
      setStudent={setStudent}
    />
  }
/>
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;