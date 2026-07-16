import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStudent } from "../redux/profileSlice";
import ProfileContext from "../context/ProfileContext";

import {
  FaEnvelope,
  FaUser,
} from "react-icons/fa";

function Footer() {
  const { darkMode } = useContext(ProfileContext);

  const student = useSelector(
    (state) => state.profile.student
  );

  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);

  const [email, setEmail] = useState(
    student.email
  );

  const saveEmail = () => {
    dispatch(
      setStudent({
        ...student,
        email: email,
      })
    );

    setEditing(false);
  };

  return (
    <section
      className={`max-w-2xl mx-auto mt-12 rounded-2xl shadow-xl p-8 transition-all duration-300 ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-8">
        Contact
      </h2>

      <div className="space-y-6">

        <div className="flex items-center gap-4">
          <FaUser
            size={24}
            className="text-blue-600"
          />

          <span className="text-lg">
            {student.name}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <FaEnvelope
            size={24}
            className="text-red-500"
          />

          {editing ? (
            <div className="flex gap-3 flex-1">

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                className="flex-1 border border-gray-300 rounded-lg p-2 text-black"
              />

              <button
                onClick={saveEmail}
                className="bg-green-600 hover:bg-green-700 text-white px-4 rounded-lg"
              >
                Save
              </button>

            </div>
          ) : (
            <div className="flex justify-between items-center flex-1">

              <span>{student.email}</span>

              <button
                onClick={() => setEditing(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
              >
                Edit Email
              </button>
              <div className="flex items-center justify-between mt-8">

  <span className="font-semibold">
    GitHub
  </span>

  <a
    href={student.github}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-500 hover:underline"
  >
    View Profile
  </a>

</div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default Footer;