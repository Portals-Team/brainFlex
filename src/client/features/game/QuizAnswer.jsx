import { Link } from "react-router-dom";

/*Current question will fetch from the database Quiz_problems to show the tally of how many questions have been answered in the quiz*/

/*Question will fetch from the database via the Question table to display the question*/

/*Question answers will be fetched from the database via the Question table to display all the possible answers for the question*/

/*Fun fact will fetch from the database via the question table to display a fact about the answered question*/

export default function QuizAnswer() {
  return (
    <>
      <h1>QuizAnswer</h1>
      {/*flex this section into a row*/}
      <section>
        <li>Current Question</li>
        <div>
          <h3>
            QUESTION: this is the current question fetched from the database
          </h3>
          <ol>
            {/*function-iternary operator if question answer {true} display 'check' : display 'x'*/}
            <li>
              <label for="answerA">
                ANSWER A <input type="checkbox" id="answerA" name="answer" />
              </label>
            </li>
            <li>
              <label for="answerA">
                ANSWER B <input type="checkbox" id="answerA" name="answer" />
              </label>
            </li>
            <li>
              <label for="answerA">
                ANSWER C <input type="checkbox" id="answerA" name="answer" />
              </label>
            </li>
            <li>
              <label for="answerA">
                ANSWER D <input type="checkbox" id="answerA" name="answer" />
              </label>
            </li>
          </ol>
        </div>
        <li>Score</li>
      </section>
      <section>
        <h4>
          FUN FACT: this is the fun fact for the answer of the current question
        </h4>
      </section>
      <section>
        <Link to="/game">BACK</Link>
      </section>
    </>
  );
}
