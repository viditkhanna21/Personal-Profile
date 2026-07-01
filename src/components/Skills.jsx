function Skills(props) {
  return (
    <section id="skills" className="skills">

      <h2>My Skills</h2>

      <ul>

        {props.skills.map((skill) => (

          <li key={skill}>
            {skill}
          </li>

        ))}

      </ul>

    </section>
  );
}

export default Skills;