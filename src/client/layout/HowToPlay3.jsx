import { Link } from "react-router-dom";

import "./navbar.css";

export default function HowToPlay3() {
  return (
    <section>
      <h1>How To Play 3</h1>
      <p>
        ✨ Step 3: Crack the Code! Think you’ve got it? Smash that solve button
        and spell out the secret word to complete your quest. The fewer
        questions you need, the higher your score! It’s a race of wits!
      </p>
      <Link to="/">HOME</Link>
    </section>
  );
}
