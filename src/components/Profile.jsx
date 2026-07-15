import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStudent } from "../redux/profileSlice";

function Profile() {

  const student = useSelector((state) => state.profile.student);

  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState(student);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  const handleSave = () => {

    dispatch(setStudent(formData));

    setEditing(false);

  };

  if (!student) {
    return <h2>Loading...</h2>;
  }

  if (editing) {

    return (

      <section className="profile">

        <h2>Edit Profile</h2>

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
        />

        <input
          type="text"
          name="college"
          value={formData.college}
          onChange={handleChange}
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />

        <br />

        <button onClick={handleSave}>
          Save
        </button>

      </section>

    );

  }

  return (

    <section className="profile">

      <h2>{student.name}</h2>

      <h3>{student.course}</h3>

      <h4>{student.college}</h4>

      <p>{student.description}</p>

      <button onClick={() => setEditing(true)}>
        ✏ Edit Profile
      </button>

    </section>

  );

}

export default Profile;