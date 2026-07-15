import { useState, useContext } from "react";
import ProfileContext from "../context/ProfileContext";

function Hobbies() {
  const { hobbies, setHobbies } = useContext(ProfileContext);

  const [newHobby, setNewHobby] = useState("");

  const addHobby = () => {

    if (newHobby.trim() === "") return;

    setHobbies([...hobbies, newHobby]);

    setNewHobby("");

  };

  const removeHobby = (hobbyToRemove) => {

    setHobbies(

      hobbies.filter(
        hobby => hobby !== hobbyToRemove
      )

    );

  };

  return (

    <section className="hobbies">

      <h2>My Hobbies</h2>

      <ul>

        {hobbies.map((hobby) => (

          <li key={hobby}>

            {hobby}

            <button
              className="remove-btn"
              onClick={() => removeHobby(hobby)}
            >
              Remove
            </button>

          </li>

        ))}

      </ul>

      <input
        type="text"
        placeholder="Enter new hobby"
        value={newHobby}
        onChange={(e) => setNewHobby(e.target.value)}
      />

      <button onClick={addHobby}>

        Add Hobby

      </button>

    </section>

  );

}

export default Hobbies;