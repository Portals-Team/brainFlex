import { Link } from "react-router-dom";
/*Current question will fetch from the database Quiz_problems to show the tally of how many questions have been answered in the quiz*/

/*Question will fetch from the database via the Question table to display the question*/

/*Question answers will be fetched from the database via the Question table to display all the possible answers for the question*/

/*Score will be fetched from the database via the Quiz_problems table to display a tally of how many questions the players got wrong or right*/

export default function Quiz() {
  return (
    <>
      <h1>Quiz</h1>
      {/*flex this section into a row*/}
      <section>
        <li>Current Question</li>
        <div>
          <h3>
            QUESTION: this is the current question fetched from the database
          </h3>
          <ol>
            {/*function-upon entering an answer the user will be directed to the quiz answer page*/}
            <li>
              <label for="answerA">
                ANSWER A <input type="radio" id="answerA" name="answer" />
              </label>
            </li>
            <li>
              <label for="answerA">
                ANSWER B <input type="radio" id="answerA" name="answer" />
              </label>
            </li>
            <li>
              <label for="answerA">
                ANSWER C <input type="radio" id="answerA" name="answer" />
              </label>
            </li>
            <li>
              <label for="answerA">
                ANSWER D <input type="radio" id="answerA" name="answer" />
              </label>
            </li>
          </ol>
        </div>
        <li>Score</li>
      </section>
      <section>
        <Link to="/game">BACK</Link>
      </section>
    </>
  );
}
