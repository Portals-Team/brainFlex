import { Link } from "react-router-dom";

import "./navbar.css";

/**
 *
 * @component HowToPlay1 returns a tutorial page on ow to play the quiz game.
 */

//show an image of the pick topics page
//show an image of the the game home page
export default function HowToPlay1() {
  return (
    <>
      <section className="howToPlaySection">
        <header id="howToPlayHeader">🌟 Step 1: </header>
        <p id="howToPlayTagline">Choose Your Adventure!</p>
        <p id="howToPlayInstructions">
          Pick a topic and let the game begin. You’ll get a mysterious blurred
          image and a word puzzle of empty letters waiting to reveal a secret
          word related to your chosen theme. It’s your brain’s warm-up!
        </p>
      </section>
      <section id="buttonSection">
        <Link to="/">
          <button id="button">HOME</button>
        </Link>
        <Link to="/howtoplay/2">
          <button id="button">NEXT</button>
        </Link>
      </section>
    </>
  );
}
