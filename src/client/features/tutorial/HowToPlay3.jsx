import { Link } from "react-router-dom";

import "./howToPlay.css";

/**
 *
 * @component HowToPlay3 returns a tutorial page on ow to play the quiz game.
 */
export default function HowToPlay3() {
  return (
    <>
      <section className="howToPlaySection">
        <header className="howToPlayHeader">✨ Step 3: </header>
        <p className="howToPlayTagline">Crack the Code!</p>
        <p className="howToPlayInstructions">
          Think you’ve got it? Smash that solve button and spell out the secret
          word to complete your quest. The fewer questions you need, the higher
          your score! It’s a race of wits!
        </p>
        <div className="imageContainerTutorial">
          <img
            className="tutorialImage"
            src="https://res.cloudinary.com/dzpne110u/image/upload/v1713042631/tutorial3_ocqtqy.png"
            alt="image shows how to pick a topic and what the starting game page looks like"
          />
        </div>
      </section>
      <section className="buttonSectionTutorial">
        <Link to="/">
          <button id="button">HOME</button>
        </Link>
      </section>
    </>
  );
}
