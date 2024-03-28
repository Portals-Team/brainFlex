import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from "react";
import {
  useGetQuizProblemsQuery,
  useGetQuestionsQuery,
  useGetGameQuery,
} from "../game/gameSlice";
// import { Link } from "react-router-dom";

/*Current question will fetch from the database Quiz_problems to show the tally of how many questions have been answered in the quiz*/

/*Question will fetch from the database via the Question table to display the question*/

/*Question answers will be fetched from the database via the Question table to display all the possible answers for the question*/

/*Fun fact will fetch from the database via the question table to display a fact about the answered question*/

export default function QuizAnswer() {
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
      <h1>QuizAnswer</h1>
      {/*flex this section into a row*/}
      <section>
        <li>{question?.question}</li>
        <div>
          <h3>
            QUESTION: this is the current question fetched from the database
          </h3>
          <ol>
            {/*function-iternary operator if question answer {true} display 'check' : display 'x'*/}
            <li>
              <label htmlFor="answerA">
                {question?.answer_a}
                <input type="checkbox" id="answerA" name="answerA" />
                <span>&#10003;</span>
              </label>
            </li>
            <li>
              <label htmlFor="answerA">
                {question?.answer_b}
                <input type="checkbox" id="answerB" name="answerB" />
              </label>
              <span>&#10005;</span>
            </li>
            <li>
              <label htmlFor="answerA">
                {question?.answer_c}
                <input type="checkbox" id="answerC" name="answerC" />
              </label>
            </li>
            <li>
              <label htmlFor="answerA">
                {question?.answer_d}
                <input type="checkbox" id="answerD" name="answerD" />
              </label>
            </li>
          </ol>
        </div>
        <li>Score</li>
      </section>
      <section>
        <h4>{question?.fun_fact}</h4>
      </section>
      <section>
        <Link to="/game">
          BACK When clicked should increase current question by 1
        </Link>
      </section>
    </>
  );
}
