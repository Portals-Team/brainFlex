// import { Link } from "react-router-dom";
// import {
//   useGetQuizProblemQuery,
//   useGetQuestionQuery,
//   useGetQuizQuery
// } from "./gameSlice";
// will need the quiz problem, that corresponds with the current question of the quiz table, and the question of the get quiz problem id

/*Current question will fetch from the database Quiz_problems to show the tally of how many questions have been answered in the quiz*/

/*Question will fetch from the database via the Question table to display the question*/

/*Question answers will be fetched from the database via the Question table to display all the possible answers for the question*/

/*Score will be fetched from the database via the Quiz_problems table to display a tally of how many questions the players got wrong or right*/

export default function Quiz() {
  // const { id } = useParams();
  //every page of game logic will have in the URL quiz id as the parameter.
  //will get the id from use params, the id will be the current quiz that we are on id
  // const { data: quiz } = useGetQuizQuery(id);
  //will get the data from the associated quiz
  // const { data: currentQuizProblem } = useGetQuizProblemQuery(
  //   quiz.questions[quiz.current_question - 1]
  // );
  //because quiz has an array of questions, this will get the quizProblem at index of questions in quiz at the current_question index. so if on question 5, will get
  // quiz problem at index position 4
  // const { data: question } = useGetQuestionQuery(
  //   currentQuizProblem.question_id
  // );
  //this will get the question information specific to the current quiz problem question id so that the answers can be shown and everything.

  return (
    <>
      <h1>Quiz</h1>
      {/*flex this section into a row*/}
      <section>
        <li>Quiz Current</li>
        <div>
          <h3>qestion</h3>
          {/*this will display the question*/}
          <ol>
            {/*function-upon entering an answer the user will be directed to the quiz answer page*/}
            <li>
              <label for="answerA">
                answer A
                <input type="radio" id="answerA" name="answer" />
              </label>
            </li>
            <li>
              <label for="answerA">
                Answer B
                <input type="radio" id="answerA" name="answer" />
              </label>
            </li>
            <li>
              <label for="answerA">
                Answer C
                <input type="radio" id="answerA" name="answer" />
              </label>
            </li>
            <li>
              <label for="answerA">
                Answer D
                <input type="radio" id="answerA" name="answer" />
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
