import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSkills } from "../redux/profileSlice";
import ProfileContext from "../context/ProfileContext";

function Skills() {
  const { darkMode } = useContext(ProfileContext);

  const skills = useSelector((state) => state.profile.skills);

  const dispatch = useDispatch();

  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() === "") return;

    dispatch(
      setSkills([...skills, newSkill])
    );

    setNewSkill("");
  };

  const removeSkill = (skillToRemove) => {
    dispatch(
      setSkills(
        skills.filter(
          (skill) => skill !== skillToRemove
        )
      )
    );
  };

  return (
    <section
      className={`max-w-3xl mx-auto mt-12 rounded-2xl shadow-xl p-8 transition-all duration-300 ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        My Skills
      </h2>

      <div className="flex flex-wrap gap-3 mb-8">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-3"
          >
            <span>{skill}</span>

            <button
              onClick={() => removeSkill(skill)}
              className="bg-red-500 hover:bg-red-600 px-2 rounded transition"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Enter new skill"
          value={newSkill}
          onChange={(e) =>
            setNewSkill(e.target.value)
          }
          className="flex-1 border border-gray-300 rounded-lg p-3 text-black"
        />

        <button
          onClick={addSkill}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg transition"
        >
          Add
        </button>
      </div>
    </section>
  );
}

export default Skills;