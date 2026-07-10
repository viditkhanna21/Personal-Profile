import Profile from "../components/Profile";

function Home({ student, setStudent }) {

  return (

    <Profile
      student={student}
      setStudent={setStudent}
    />

  );

}

export default Home;