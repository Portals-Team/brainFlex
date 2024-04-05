import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from "react";
import { useGetMeQuery } from "../account/accountSlice";
import {
  useGetGameQuery,
  useUpdateQuizQuestionUnsolvedMutation,
  useUpdateQuizQuestionSolvedMutation,
} from "../game/gameSlice";

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
 * @component QuizAnswer returns the answer of the current quiz question the user has answered. The page shows the users answer, if its correct or not along with an indication of the correct and incorrect multiple choice answers as well as a fun fact that goes along with the topic quiz.
 */
export default function QuizAnswer() {
  const todaysQuiz = isThereAQuiz();
  const id = todaysQuiz;
  const { data: quiz } = useGetGameQuery(id);
  const currentQuestionIndex = quiz?.current_question - 1; // Adjusting for zero-based indexing
  const currentQuestion =
    quiz?.questions[currentQuestionIndex].question.question;
  const [setNextQuestion] = useUpdateQuizQuestionUnsolvedMutation();
  const [setSolved] = useUpdateQuizQuestionSolvedMutation();
  const navigate = useNavigate();

  /**
   *
   * @function compareAnswer checks the correct answer letter of the multiple choice answers and compares it to the other answers letters of the quiz.
   * @param {String} letter
   * @returns If answer letter is the correct answer it returns a checkmark if wrong it returns an 'X'
   */
  const compareAnswer = (letter) => {
    if (
      quiz?.questions[currentQuestionIndex].question.correct_answer === letter
    ) {
      return <span className="answerIconCorrect">&#10003;</span>;
    } else {
      return <span className="answerIcon">&#10005;</span>;
    }
  };

  /**
   *
   * @function yourAnswer checks what letter answer is the users answer letter.
   * @param {String} letter
   * @returns the string 'Your Answer' next to the users answer choice.
   */
  const yourAnswer = (letter) => {
    if (quiz?.questions[currentQuestionIndex].user_answer === letter) {
      return <span id="yourAnswer">Your Answer</span>;
    }
  };

  /**
   *
   * @function goBackIncreaseQuestion
   * @description if the current question is the 10th question then the users quiz is set to solved via the useUpdateQuizQuestionSolvedMutation. Else the next quiz question is set via the useUpdateQuizQuestionUnsolvedMutation. all is initiated by way of the back to game home button which also navigates the user back to the game home page.
   */
  const goBackIncreaseQuestion = async (evt) => {
    evt.preventDefault();
    if (currentQuestion === 10) {
      setSolved(quiz?.id);
    } else {
      setNextQuestion(quiz?.id);
    }
    navigate(`/game/home`);
  };

  return (
    <>
      <section id="quizAnswersSection">
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
          <p id="funFactIcon">Fun Fact:</p>
        </div>
        <h3 id="funFact">
          {quiz?.questions[currentQuestionIndex].question.fun_fact}
        </h3>
      </section>
      <section id="buttonSection">
        <form onSubmit={goBackIncreaseQuestion}>
          <button id="backHomeButtonAnswerPage">Back To Game Home</button>
        </form>
      </section>
    </>
  );
}
