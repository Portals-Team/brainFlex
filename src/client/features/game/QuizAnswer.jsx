import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from "react";
import {
  useGetQuizProblemsQuery,
  useGetQuestionsQuery,
  useGetGameQuery,
  useUpdateQuizQuestionUnsolvedMutation,
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
  const currentQuestionIndex = quiz?.current_question - 1; // Adjusting for zero-based indexing
  const currentQuestion =
    quiz?.questions[currentQuestionIndex].question.question;
  const [setNextQuestion] = useUpdateQuizQuestionUnsolvedMutation();
  const navigate = useNavigate();

  const compareAnswer = (letter) => {
    if (
      quiz?.questions[currentQuestionIndex].question.correct_answer === letter
    ) {
      return <span>&#10003;</span>;
    } else {
      return <span>&#10005;</span>;
    }
  };
  const yourAnswer = (letter) => {
    if (quiz?.questions[currentQuestionIndex].user_answer === letter) {
      return <span>Your Answer</span>;
    }
  };
  const goBackIncreaseQuestion = async (evt) => {
    evt.preventDefault();
    setNextQuestion(quiz?.id);
    navigate(`/game/home/${id}`);
  };

  return (
    <>
      <h1>QuizAnswer</h1>
      {/*flex this section into a row*/}
      <section>
        <h3>{quiz?.questions[currentQuestionIndex].question.question}</h3>
        <div>
          <h3>
            QUESTION: this is the current question fetched from the database
          </h3>
          <ol>
            {/*function-iternary operator if question answer {true} display 'check' : display 'x'*/}
            <li>
              <label htmlFor="answerA">
                {quiz?.questions[currentQuestionIndex].question.answer_a}

                {compareAnswer("A")}
                {yourAnswer("A")}
              </label>
            </li>
            <li>
              <label htmlFor="answerA">
                {quiz?.questions[currentQuestionIndex].question.answer_b}
              </label>
              {compareAnswer("B")}
              {yourAnswer("B")}
            </li>
            <li>
              <label htmlFor="answerA">
                {quiz?.questions[currentQuestionIndex].question.answer_c}
              </label>
              {compareAnswer("C")}
              {yourAnswer("C")}
            </li>
            <li>
              <label htmlFor="answerA">
                {quiz?.questions[currentQuestionIndex].question.answer_d}
              </label>
              {compareAnswer("D")}
              {yourAnswer("D")}
            </li>
          </ol>
        </div>
        <li>Score</li>
      </section>
      <section>
        <h4>{quiz?.questions[currentQuestionIndex].question.fun_fact}</h4>
      </section>
      <section>
        <form onSubmit={goBackIncreaseQuestion}>
          <button>Back To Game Home</button>
        </form>
      </section>
    </>
  );
}
