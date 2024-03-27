import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from "react";

import {
  useGetQuizProblemsQuery,
  useGetQuestionsQuery,
  useGetGameQuery,
} from "../game/gameSlice";
// will need the quiz problem, that corresponds with the current question of the quiz table, and the question of the get quiz problem id

/*Current question will fetch from the database Quiz_problems to show the tally of how many questions have been answered in the quiz*/

/*Question will fetch from the database via the Question table to display the question*/

/*Question answers will be fetched from the database via the Question table to display all the possible answers for the question*/

/*Score will be fetched from the database via the Quiz_problems table to display a tally of how many questions the players got wrong or right*/

export default function Quiz() {
  const { id } = useParams();
  //every page of game logic will have in the URL quiz id as the parameter.
  //will get the id from use params, the id will be the current quiz that we are on id
  const { data: quiz } = useGetGameQuery(id);
  console.log(quiz);
  console.log(quiz?.current_question);
  const { data: question } = useGetQuestionsQuery(quiz?.current_question);
  console.log(question);

  return (
    <>
      <h1>Quiz</h1>
      flex this section into a row
      <section>
        <li>Quiz Current</li>
        <div>
          <h3>{question.question}</h3>
          {/*this will display the question*/}
          <ol>
            {/*function-upon entering an answer the user will be directed to the quiz answer page*/}
            <li>
              <label htmlFor="answerA">
                {question.answer_a}
                <input type="radio" id="answerA" name="answer" />
              </label>
            </li>
            <li>
              <label htmlFor="answerA">
                {question.answer_b}
                <input type="radio" id="answerA" name="answer" />
              </label>
            </li>
            <li>
              <label htmlFor="answerA">
                {question.answer_c}
                <input type="radio" id="answerA" name="answer" />
              </label>
            </li>
            <li>
              <label htmlFor="answerA">
                {question.answer_d}
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
