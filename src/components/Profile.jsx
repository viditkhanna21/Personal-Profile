function Profile(props) {
  return (
    <section id="home" className="profile">

      <h2>{props.name}</h2>

      <h3>{props.course}</h3>

      <h4>{props.college}</h4>

      <p>{props.description}</p>

    </section>
  );
}

export default Profile;