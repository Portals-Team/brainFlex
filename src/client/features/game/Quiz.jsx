import { Link, NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from "react";
import { useState } from "react";

import {
  useGetGameQuery,
  useUpdateProblemMutation,
  useUpdateQuizQuestionUnsolvedMutation,
} from "../game/gameSlice";

/**
 *
 * @component Quiz returns the current quiz question along with the multiple choice answers to the current quiz question of the Quiz.
 */
export default function Quiz() {
  const { id } = useParams();
  const [user_answer, setUserAnswer] = useState("");
  const navigate = useNavigate();
  const [updateProblem, { isLoading, isError, isSuccess, error }] =
    useUpdateProblemMutation();
  const { data: quiz } = useGetGameQuery(id);
  const currentQuestionIndex = quiz?.current_question - 1; // Adjusting for zero-based indexing
  // do we need this? const [setNextQuestion] = useUpdateQuizQuestionUnsolvedMutation();

  /**
   *
   * @description pickAnswer will update the user_answer of the user in the database via the useUpdateProblemMutation by way of the submit answer button which also navigates the user to the QuizAnswer page. The users answer is recorded by the setter on change event connected to the radio button the user picks for their answer choice.
   */
  const pickAnswer = async (evt) => {
    evt.preventDefault();
    updateProblem({
      id: quiz?.questions[currentQuestionIndex].id,
      user_answer,
    }).unwrap();
    navigate(`/game/quiz/answer/${id}`);
  };

  return (
    <>
      <section id="questionSection">
        <div id="iconContainer">
          <p id="questionIcon">Q:</p>
        </div>
        <div>
          <h3 id="question">
            {quiz?.questions[currentQuestionIndex].question.question}
          </h3>
        </div>
      </section>
      <section>
        <div>
          <ol id="questionAnswers">
            <li>
              <label className="questionAnswer" htmlFor="answerA">
                {quiz?.questions[currentQuestionIndex].question.answer_a}
                <input
                  type="radio"
                  id="answerA"
                  name="answer"
                  value="A"
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
              </label>
            </li>
            <li>
              <label className="questionAnswer" htmlFor="answerA">
                {quiz?.questions[currentQuestionIndex].question.answer_b}
                <input
                  type="radio"
                  id="answerB"
                  name="answer"
                  value="B"
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
              </label>
            </li>
            <li>
              <label className="questionAnswer" htmlFor="answerA">
                {quiz?.questions[currentQuestionIndex].question.answer_c}
                <input
                  type="radio"
                  id="answerC"
                  name="answer"
                  value="C"
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
              </label>
            </li>
            <li>
              <label className="questionAnswer" htmlFor="answerA">
                {quiz?.questions[currentQuestionIndex].question.answer_d}
                <input
                  type="radio"
                  id="answerD"
                  name="answer"
                  value="D"
                  onChange={(e) => setUserAnswer(e.target.value)}
                />
              </label>
            </li>
          </ol>
        </div>
      </section>
      <section id="buttonSection">
        <form onSubmit={pickAnswer}>
          <button id="submitAnswerButton">Submit Answer</button>
        </form>
        <NavLink to={`/game/home/${id}`}>
          <button id="backHomeButton">Back To Game Home</button>
        </NavLink>
      </section>
    </>
  );
}
