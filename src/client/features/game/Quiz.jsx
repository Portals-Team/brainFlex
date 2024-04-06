import { Link, NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useGetMeQuery } from "../account/accountSlice";

import { useGetGameQuery, useUpdateProblemMutation } from "../game/gameSlice";

const isThereAQuiz = () => {
  const { data: me } = useGetMeQuery();
  let foundQuizToday = false;
  //isfoundquizcompleted is if it finds a quiz for that user today, is that quiz completed or not
  let todaysQuiz = null;
  //this function looks at all of a users quizzes, then for each of them takes the datetime of that quiz
  // and converts it to month date year format, then compares it to todays date in the same format
  // it then for each of the quizes if it finds a quiz, sets foundquiz today to true, and then after that sees if that quiz is completed.
  // there should never be more than one quiz for a user on a day, so shouldnt run into overlap
  for (let i = 0; i < me?.quizzes.length; i++) {
    const thedate = new Date(me?.quizzes[i].date_time).toString();
    const datechanged = thedate.split(" ").slice(1, 4).join(" ");
    if (datechanged === Date().split(" ").slice(1, 4).join(" ")) {
      foundQuizToday = true;
      todaysQuiz = me?.quizzes[i].id;
      if (me?.quizzes[i].quiz_completed === true) {
        isFoundQuizCompleted = true;
      } else {
        false;
      }
    }
  }

  return todaysQuiz;
};

/**
 *
 * @component Quiz returns the current quiz question along with the multiple choice answers to the current quiz question of the Quiz.
 */
export default function Quiz() {
  const todaysQuiz = isThereAQuiz();
  const id = todaysQuiz;
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
    navigate(`/game/quiz/answer/`);
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
      <section id="quizAnswersSection">
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
        <NavLink to="/game/home">
          <button id="backHomeButton">Back To Game Home</button>
        </NavLink>
        <form onSubmit={pickAnswer}>
          <button id="submitAnswerButton">Submit Answer</button>
        </form>
      </section>
    </>
  );
}
