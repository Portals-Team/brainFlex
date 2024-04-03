import { Link } from "react-router-dom";

import "./howToPlay.css";

/**
 *
 * @component HowToPlay2 returns a tutorial page on ow to play the quiz game.
 */

//show an image of the quiz question page.
//show an image of the game home page with the image half in focus and some letters revealed.
export default function HowToPlay2() {
  return (
    <>
      <section className="howToPlaySection">
        <header id="howToPlayHeader">🚀 Step 2: </header>
        <p id="howToPlayTagline">The Quest for Clues!</p>
        <p id="howToPlayInstructions">
          Tackle 10 intriguing questions-answer as few or as many as you wish.
          Each correct answer sharpens the image and drops a letter into your
          word puzzle, bringing you closer to the secret word. Bonus: snag a fun
          fact with every question to flex your brain!
        </p>
        <div id="imageContainerTutorial">
          <img
            id="tutorialOneImage"
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1712152717/tutorialPage2_jkg4rg.png"
            alt="image shows how to pick a topic and what the starting game page looks like"
          />
        </div>
      </section>
      <section id="buttonSectionTutorial">
        <Link to="/">
          <button id="button">HOME</button>
        </Link>
        <Link to="/howtoplay/3">
          <button id="button">NEXT</button>
        </Link>
      </section>
    </>
  );
}
