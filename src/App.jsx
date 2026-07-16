import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "./components/Header";

import Home from "./pages/Home";
import SkillsPage from "./pages/SkillsPage";
import HobbiesPage from "./pages/HobbiesPage";
import Contact from "./pages/Contact";

import ProfileContext from "./context/ProfileContext";

import {
  setStudent,
  setSkills,
  setHobbies,
} from "./redux/profileSlice";

import { getProfileData } from "./api/fakeApi";

function App() {
  const dispatch = useDispatch();

  const [darkMode, setDarkMode] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        // GitHub API
const response = await fetch(
  "https://api.github.com/users/viditkhanna21"
);

const user = await response.json();

        dispatch(
  setStudent({
    name: "Vidit Khanna",
    course: "B.Tech",
    college: "South Asian University",
    description: "Building Websites.",
    email: "vidit.khanna21@gmail.com",

    avatar: user.avatar_url,
    repos: user.public_repos,
    github: user.html_url,
  })
        );

        // Fake API
        const data = await getProfileData();

        dispatch(setSkills(data.skills));
        dispatch(setHobbies(data.hobbies));

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    loadData();
  }, [dispatch]);

  if (loading) {
    return (
      <h1 className="text-center text-3xl mt-20">
        Loading Profile...
      </h1>
    );
  }

  return (
    <ProfileContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      <BrowserRouter>
        <div
          className={`min-h-screen transition-all duration-300 ${
            darkMode
              ? "bg-slate-900 text-white"
              : "bg-slate-100 text-slate-900"
          }`}
        >
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />

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