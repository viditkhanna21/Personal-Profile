import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  setStudent as setReduxStudent,
  setSkills as setReduxSkills,
  setHobbies as setReduxHobbies,
} from "./redux/profileSlice";

import Header from "./components/Header";

import Home from "./pages/Home";
import SkillsPage from "./pages/SkillsPage";
import HobbiesPage from "./pages/HobbiesPage";
import Contact from "./pages/Contact";

import { getProfileData } from "./api/fakeApi";
import ProfileContext from "./context/ProfileContext";

function App() {

  const dispatch = useDispatch();

  // Context state (temporary)
  const [darkMode, setDarkMode] = useState(false);

  const [student, setStudent] = useState(null);

  const [skills, setSkills] = useState([]);

  const [hobbies, setHobbies] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadData() {

      try {

        // -------- REAL API --------

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );

        const user = await response.json();

        const studentData = {
          name: user.name,
          course: "B.Tech",
          college: "South Asian University",
          description: "Learning React",
          email: user.email,
        };

        // Update Context
        setStudent(studentData);

        // Update Redux
        dispatch(setReduxStudent(studentData));

        // -------- FAKE API --------

        const data = await getProfileData();

        // Update Context
        setSkills(data.skills);
        setHobbies(data.hobbies);

        // Update Redux
        dispatch(setReduxSkills(data.skills));
        dispatch(setReduxHobbies(data.hobbies));

        setLoading(false);

      } catch (error) {

        console.error(error);

        setLoading(false);

      }

    }

    loadData();

  }, [dispatch]);

  if (loading) {
    return <h1>Loading Profile...</h1>;
  }

  return (

    <ProfileContext.Provider
      value={{
        student,
        setStudent,
        skills,
        setSkills,
        hobbies,
        setHobbies,
        darkMode,
        setDarkMode,
      }}
    >

      <BrowserRouter>

        <div className={darkMode ? "dark" : "light"}>

          <Header />

          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/skills"
              element={<SkillsPage />}
            />

            <Route
              path="/hobbies"
              element={<HobbiesPage />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

          </Routes>

        </div>

      </BrowserRouter>

    </ProfileContext.Provider>

  );

}

export default App;