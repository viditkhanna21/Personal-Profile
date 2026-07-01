function Footer(props) {
  return (
    <footer id="contact" className="footer">

      <p>{props.name}</p>

      <p>{props.email}</p>

    </footer>
  );
}

export default Footer;