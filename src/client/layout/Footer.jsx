import { Link } from "react-router-dom";

import "./navbar.css";

export default function Footer() {
  return (
    <section id="footerSection">
      <div id="footerNavElements">
        <p className="footerNavElement">
          <Link to="/">home</Link>
        </p>
        <p className="footerNavElement">
          <Link to="/account/:id">account</Link>
        </p>
        <p className="footerNavElement">
          <Link to="/auth">login/logout</Link>
        </p>
      </div>
      <h3 id="howToPlay">how to play</h3>
      <p id="creators">creators: ian / kyle / rich</p>
    </section>
  );
}
