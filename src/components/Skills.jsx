import { useState } from "react";

function Skills({ skills, setSkills }) {

  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {

    if (newSkill.trim() === "") return;

    setSkills([...skills, newSkill]);

    setNewSkill("");

  };

  const removeSkill = (skillToRemove) => {

    setSkills(
      skills.filter((skill) => skill !== skillToRemove)
    );

  };

  return (
    <section className="skills">

      <h2>My Skills</h2>

      <ul>
        {skills.map((skill) => (
          <li key={skill}>
            {skill}

            <button
  onClick={() => removeSkill(skill)}
  className="remove-btn"
>
  Remove
</button>
              
            

          </li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="Enter new skill"
        value={newSkill}
        onChange={(e) => setNewSkill(e.target.value)}
      />

      <button onClick={addSkill}>
        Add Skill
      </button>

    </section>
  );
}

export default Skills;