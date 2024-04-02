import { Link } from "react-router-dom";

import "./navbar.css";

export default function HowToPlay1() {
  return (
    <section>
      <h1>How To Play 1</h1>;<p>instructions on how to play the game</p>
      <Link to="/howtoplay/2">Next</Link>
      <Link to="/">HOME</Link>
    </section>
  );
}
