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
              <input type="radio" id="answerA" name="answer" />
              <label for="answerA">ANSWER A</label>
            </li>
            <li>
              <input type="radio" id="answerB" name="answer" />
              <label for="answerB">ANSWER B</label>
            </li>
            <li>
              <input type="radio" id="answerC" name="answer" />
              <label for="answerC">ANSWER C</label>
            </li>
            <li>
              <input type="radio" id="answerD" name="answer" />
              <label for="answerD">ANSWER D</label>
            </li>
          </ol>
        </div>
        <li>Score</li>
      </section>
    </>
  );
}
