import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHobbies } from "../redux/profileSlice";
import ProfileContext from "../context/ProfileContext";

function Hobbies() {
  const { darkMode } = useContext(ProfileContext);

  const hobbies = useSelector((state) => state.profile.hobbies);

  const dispatch = useDispatch();

  const [newHobby, setNewHobby] = useState("");

  const addHobby = () => {
    if (newHobby.trim() === "") return;

    dispatch(
      setHobbies([...hobbies, newHobby])
    );

    setNewHobby("");
  };

  const removeHobby = (hobbyToRemove) => {
    dispatch(
      setHobbies(
        hobbies.filter(
          (hobby) => hobby !== hobbyToRemove
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
        My Hobbies
      </h2>

      <div className="flex flex-wrap gap-3 mb-8">
        {hobbies.map((hobby) => (
          <div
            key={hobby}
            className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center gap-3"
          >
            <span>{hobby}</span>

            <button
              onClick={() => removeHobby(hobby)}
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
          placeholder="Enter new hobby"
          value={newHobby}
          onChange={(e) => setNewHobby(e.target.value)}
          className="flex-1 border border-gray-300 rounded-lg p-3 text-black"
        />

        <button
          onClick={addHobby}
          className="bg-green-600 hover:bg-green-700 text-white px-6 rounded-lg transition"
        >
          Add
        </button>
      </div>
    </section>
  );
}

export default Hobbies;