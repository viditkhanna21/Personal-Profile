import { useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStudent } from "../redux/profileSlice";
import ProfileContext from "../context/ProfileContext";

function Profile() {
  const student = useSelector((state) => state.profile.student);

  const dispatch = useDispatch();

  const { darkMode } = useContext(ProfileContext);

  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState(student);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(setStudent(formData));
    setEditing(false);
  };

  if (!student) {
    return (
      <h2 className="text-center text-2xl mt-10">
        Loading...
      </h2>
    );
  }

  // ================= EDIT MODE =================

  if (editing) {
    return (
      <section
        className={`max-w-xl mx-auto mt-12 rounded-2xl shadow-xl p-8 transition-all duration-300 ${
          darkMode
            ? "bg-slate-800 text-white"
            : "bg-white text-slate-900"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Edit Profile
        </h2>

        <div className="space-y-4">

          <input
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
          />

          <input
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
          />

          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <button
            onClick={handleSave}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-300"
          >
            Save Changes
          </button>

        </div>
      </section>
    );
  }

  // ================= VIEW MODE =================

  return (
    <section
      className={`max-w-xl mx-auto mt-12 rounded-2xl shadow-xl p-8 text-center transition-all duration-300 ${
        darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      <div className="flex justify-center mb-6">
  <img
    src={student.avatar}
    alt="GitHub Avatar"
    className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg"
  />
</div>

      <h2
        className={`text-4xl font-bold ${
          darkMode ? "text-white" : "text-slate-900"
        }`}
      >
        {student.name}
      </h2>

      <h3
        className={`text-xl mt-3 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        {student.course}
      </h3>

      <h4
        className={`text-lg ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {student.college}
      </h4>

      <p
        className={`mt-6 text-lg ${
          darkMode ? "text-gray-200" : "text-gray-700"
        }`}
      >
        {student.description}
      </p>
      <div className="mt-6">
  <h3 className="text-xl font-semibold">
    Public Repositories
  </h3>

  <p className="text-3xl text-blue-500 font-bold">
    {student.repos}
  </p>
</div>

      <button
        onClick={() => setEditing(true)}
        className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:scale-105"
      >
        ✏ Edit Profile
      </button>
    </section>
  );
}

export default Profile;