import { Link } from "react-router-dom";

import "./navbar.css";

/**
 *
 * @component Footer universal component via Root.jsx can be viewed on every page of the application with links to home, account, game tutorial and indicates if a user is logged in or logged out.
 */
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
      <Link to="howtoplay/1">
        <h3 id="howToPlay">how to play </h3>
      </Link>
      <div id="creators">
        <p className="creators">creators: </p>
        <a
          className="creators"
          target="_blank"
          href="https://www.linkedin.com/in/bravermanian/"
        >
          Ian Braverman
        </a>
        <a
          className="creators"
          target="_blank"
          href="https://www.linkedin.com/in/kyle-cogan-268aa1a9/"
        >
          Kyle Cogan
        </a>
        <a
          className="creators"
          target="_blank"
          href="https://www.linkedin.com/in/richmarafioti/"
        >
          Rich Marafioti
        </a>
      </div>
    </section>
  );
}
