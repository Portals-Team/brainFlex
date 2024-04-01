import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from "react";
import {
  useGetQuizProblemsQuery,
  useGetQuestionsQuery,
  useGetGameQuery,
  useUpdateQuizQuestionUnsolvedMutation,
  useUpdateQuizQuestionSolvedMutation,
} from "../game/gameSlice";

export default function QuizAnswer() {
  const { id } = useParams();
  //every page of game logic will have in the URL quiz id as the parameter.
  //will get the id from use params, the id will be the current quiz that we are on id
  const { data: quiz } = useGetGameQuery(id);
  const currentQuestionIndex = quiz?.current_question - 1; // Adjusting for zero-based indexing
  const currentQuestion =
    quiz?.questions[currentQuestionIndex].question.question;
  const [setNextQuestion] = useUpdateQuizQuestionUnsolvedMutation();
  const [setSolved] = useUpdateQuizQuestionSolvedMutation();
  const navigate = useNavigate();

  const compareAnswer = (letter) => {
    if (
      quiz?.questions[currentQuestionIndex].question.correct_answer === letter
    ) {
      return <span className="answerIconCorrect">&#10003;</span>;
    } else {
      return <span className="answerIcon">&#10005;</span>;
    }
  };
  const yourAnswer = (letter) => {
    if (quiz?.questions[currentQuestionIndex].user_answer === letter) {
      return <span id="yourAnswer">Your Answer</span>;
    }
  };
  const goBackIncreaseQuestion = async (evt) => {
    evt.preventDefault();
    console.log(currentQuestion);
    if(currentQuestion === 10) {
      setSolved(quiz?.id);
    }
    else {
      setNextQuestion(quiz?.id);
    }
    navigate(`/game/home/${id}`);
  };

  return (
    <>
      <section id="questionSection">
        <div id="iconContainer">
          <div id="questionIcon">A:</div>
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
                {compareAnswer("A")}
                {yourAnswer("A")}
              </label>
            </li>
            <li>
              <label className="questionAnswer" htmlFor="answerA">
                {quiz?.questions[currentQuestionIndex].question.answer_b}
              </label>
              {compareAnswer("B")}
              {yourAnswer("B")}
            </li>
            <li>
              <label className="questionAnswer" htmlFor="answerA">
                {quiz?.questions[currentQuestionIndex].question.answer_c}
              </label>
              {compareAnswer("C")}
              {yourAnswer("C")}
            </li>
            <li>
              <label className="questionAnswer" htmlFor="answerA">
                {quiz?.questions[currentQuestionIndex].question.answer_d}
              </label>
              {compareAnswer("D")}
              {yourAnswer("D")}
            </li>
          </ol>
        </div>
      </section>
      <section id="factSection">
        <div id="funFactContainer">
          <div id="funFactIcon">Fun Fact:</div>
        </div>
        <h3 id="funFact">
          {quiz?.questions[currentQuestionIndex].question.fun_fact}
        </h3>
      </section>
      <section>
        <form onSubmit={goBackIncreaseQuestion}>
          <button id="backHomeButtonAnswerPage">Back To Game Home</button>
        </form>
      </section>
    </>
  );
}
