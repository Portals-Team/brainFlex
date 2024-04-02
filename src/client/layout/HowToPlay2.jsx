import { Link } from "react-router-dom";

import "./navbar.css";

export default function HowToPlay2() {
  return (
    <section>
      <h1>How To Play 2</h1>
      <p>
        🚀 Step 2: The Quest for Clues! Tackle 10 intriguing questions-answer as
        few or as many as you wish. Each correct answer sharpens the image and
        drops a letter into your word puzzle, bringing you closer to the secret
        word. Bonus: snag a fun fact with every question to flex your brain!
      </p>
      <Link to="/howtoplay/3">NEXT</Link>
      <Link to="/">HOME</Link>
    </section>
  );
}
