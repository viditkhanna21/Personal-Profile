import { useState, useContext } from "react";
import ProfileContext from "../context/ProfileContext";

function Footer() {
  const { student, setStudent } = useContext(ProfileContext);

  const [editing, setEditing] = useState(false);

  const [email, setEmail] = useState(
    student.email || "vidit.khanna21@gmail.com"
  );

  const saveEmail = () => {

    setStudent({

      ...student,

      email: email

    });

    setEditing(false);

  };

  return (

    <footer className="footer">

      <h3>Contact</h3>

      <p>{student.name}</p>

      {

        editing ?

        <>

          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <button onClick={saveEmail}>

            Save

          </button>

        </>

        :

        <>

          <p>{student.email}</p>

          <button
            onClick={()=>setEditing(true)}
          >

            Edit Email

          </button>

        </>

      }

    </footer>

  );

}

export default Footer;