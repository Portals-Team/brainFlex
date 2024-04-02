import { Link, NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from "react";
import { useState } from "react";

import {
  useGetQuestionsQuery,
  useGetGameQuery,
  useUpdateProblemMutation,
  useUpdateQuizQuestionUnsolvedMutation,
} from "../game/gameSlice";

export default function Quiz() {
  const { id } = useParams();
  const [user_answer, setUserAnswer] = useState("");
  const navigate = useNavigate();
  const [updateProblem, { isLoading, isError, isSuccess, error }] =
    useUpdateProblemMutation();
  const { data: quiz } = useGetGameQuery(id);
  const currentQuestionIndex = quiz?.current_question - 1; // Adjusting for zero-based indexing

  const [setNextQuestion] = useUpdateQuizQuestionUnsolvedMutation();

  //every page of game logic will have in the URL quiz id as the parameter.
  //will get the id from use params, the id will be the current quiz that we are on id

  //this will on click of one of the input radio buttons, send to the database the answer they picked
  //and this will also redirect them to the correct quiz answer page
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
