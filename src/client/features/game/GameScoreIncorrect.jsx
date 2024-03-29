import { Link } from "react-router-dom";
/*Current question will fetch from the database Quiz_problems to show the tally of how many questions have been answered in the quiz*/

/*Image will be fetched from the database via Image_word table

/*Score will be fetched from the database via the Quiz_problems table to display a tally of how many questions the players got wrong or right*/

/*answer grid will be fetched from the database via the Image_word table
and the full answer will be revealed*/

/*final quiz score will be fetched via ... to display the users final score for the game*/

export default function GameScoreIncorrect() {
  return (
    <>
      <h1>GameScore</h1>
      {/*flex this section into a row*/}
      <section>
        <li>Current Question</li>
        {/*image will be in full focus for the final game score view*/}
        <img src="https://picsum.photos/id/237/200/300" />
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
        <li>FINAL QUIZ SCORE</li>
      </section>
      <section>
        <Link to="/dashboard">HOME</Link>
      </section>
    </>
  );
}
