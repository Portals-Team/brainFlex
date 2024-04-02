import { Link } from "react-router-dom";

import "./howToPlay.css";

/**
 *
 * @component HowToPlay3 returns a tutorial page on ow to play the quiz game.
 */

//show an image of the game home page with some user input for the letters and solve button
// show and image of the correct answer page and the quiz score
export default function HowToPlay3() {
  return (
    <>
      <section className="howToPlaySection">
        <header id="howToPlayHeader">✨ Step 3: </header>
        <p id="howToPlayTagline">Crack the Code!</p>
        <p id="howToPlayInstructions">
          Think you’ve got it? Smash that solve button and spell out the secret
          word to complete your quest. The fewer questions you need, the higher
          your score! It’s a race of wits!
        </p>
      </section>
      <section id="buttonSection">
        <Link to="/">
          <button id="button">HOME</button>
        </Link>
      </section>
    </>
  );
}
