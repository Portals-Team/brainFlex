import { Link } from "react-router-dom";

import "./navbar.css";

export default function HowToPlay2() {
  return (
    <section>
      <h1>How To Play 2</h1>;<p>instructions on how to play the game</p>
      <Link to="/howtoplay/3">Next</Link>
      <Link to="/">HOME</Link>
    </section>
  );
}
