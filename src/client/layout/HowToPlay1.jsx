import { Link } from "react-router-dom";

import "./navbar.css";

export default function HowToPlay1() {
  return (
    <section>
      <h1>How To Play 1</h1>
      <p>
        🌟 Step 1: Choose Your Adventure! Pick a topic and let the game begin.
        You’ll get a mysterious blurred image and a word puzzle of empty letters
        waiting to reveal a secret word related to your chosen theme. It’s your
        brain’s warm-up!
      </p>
      <Link to="/howtoplay/2">NEXT</Link>
      <Link to="/">HOME</Link>
    </section>
  );
}
