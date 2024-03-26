// import { Link } from "react-router-dom";

/*Current question will fetch from the database Quiz_problems to show the tally of how many questions have been answered in the quiz*/

/*Score will be fetched from the database via the Quiz_problems table to display a tally of how many questions the players got wrong or right*/

/*answer grid will be fetched from the database via Image_word table
The answer grid should show any letters that have been revealed in the game
by correctly answering the questions*/

export default function SubmitAnswer() {
  return (
    <>
      <h1>SubmitAnswer</h1>
      {/*flex this section into a row*/}
      <section>
        <li>Current Question</li>
        <li>Score</li>
      </section>
      <section>
        {/*answer grid should be a controlled form*/}
        <h1>ANSWER GRID</h1>
        <form>
          {/*in CSS resize the width of each input container to be the length 
          of one letter*/}
          <div>
            <input type="text" maxlength="1" class="letter" />
            <input type="text" maxlength="1" class="letter" />
            <input type="text" maxlength="1" class="letter" />
            <input type="text" maxlength="1" class="letter" />
            <input type="text" maxlength="1" class="letter" />
          </div>
        </form>
      </section>
      <section>
        <Link to="/game/score">SUBMIT ANSWER</Link>
        <Link to="/game">BACK TO GAME</Link>
      </section>
    </>
  );
}
