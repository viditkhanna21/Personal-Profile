function Hobbies(props) {
  return (
    <section id="hobbies" className="hobbies">

      <h2>My Hobbies</h2>

      <ul>

        {props.hobbies.map((hobby) => (

          <li key={hobby}>
            {hobby}
          </li>

        ))}

      </ul>

    </section>
  );
}

export default Hobbies;