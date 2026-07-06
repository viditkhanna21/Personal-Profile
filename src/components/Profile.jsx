function Profile({
  name,
  course,
  college,
  description,
  likes,
  setLikes,
}) {
  return (
    <section id="home" className="profile">
      <h2>{name}</h2>

      <h3>{course}</h3>

      <h4>{college}</h4>

      <p>{description}</p>

      <p>
        <strong>Likes:</strong> {likes}
      </p>

      <button
        onClick={() => setLikes(likes + 1)}
        className="like-btn"
      >
        👍 Like My Profile
      </button>
    </section>
  );
}

export default Profile;