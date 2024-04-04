import {
  useGetImageWordQuery,
  useGetGameQuery,
  useUpdatedUserMutation,
  useUpdateQuizQuestionSolvedMutation,
} from "../game/gameSlice";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";

import "./game.css";

/**
 *
 * @returns GameHome react component, where the quiz lives throughout
 */
export default function GameHome() {
  const { id } = useParams();
  const { data: quiz } = useGetGameQuery(+id);
  const { data: image_word } = useGetImageWordQuery(quiz?.image_Word_id);
  const numberOfCorrectQuestions = numberOfAnswersCorrect();
  const navigate = useNavigate();
  const [updateUser] = useUpdatedUserMutation();

  const gameWord = image_word?.topic_word;
  const currentQuestion = quiz?.current_question;
  const blur = 50 - 5 * numberOfCorrectQuestions;
  const blurClass = `blur-${blur}`;
  let acc = 1;
  const [userInput, setUserInput] = useState(Array(gameWord?.length).fill(""));
  const [setSolved] = useUpdateQuizQuestionSolvedMutation();

  const itemsRef = useRef([]);

  /**
   * @description handleInputChange sets specific values of user inputted strings for the word guess
   * @param {Integer} index index of the user input word guess
   * @param {String} value specific letter at each point in word guess
   */
  const handleInputChange = (index, value) => {
    const updatedInput = [...userInput];
    updatedInput[index] = value;
    setUserInput(updatedInput);
    itemsRef.current[index + 1].focus();
  };

  /**
   *
   * @function numberOfAnswersCorrect
   * @returns an Integer of how many questions that the user has answered correctly
   */
  function numberOfAnswersCorrect() {
    let numberOfCorrectQuestions = 0;
    for (let i = 0; i < 10; i++) {
      if (
        quiz?.questions[i].user_answer ===
        quiz?.questions[i].question.correct_answer
      ) {
        numberOfCorrectQuestions++;
      }
    }
    return numberOfCorrectQuestions;
  }

  /**
   *
   * @function showRevealedLetters
   * @param {Integer} numberOfCorrectQuestions
   * @returns a string of how many letters to reveal based on how many questions the user has correctly anwswered
   */
  function showRevealedLetters(numberOfCorrectQuestions) {
    let revealedLetters = "";
    for (let i = 0; i < numberOfCorrectQuestions; i++) {
      revealedLetters += gameWord?.charAt(i);
    }
    return revealedLetters;
  }

  /**
   *
   * @function isGuessCorrect a helper function that concats the strings of what is revealed and known against what the user guesses
   * @param {String} guessWord
   * @returns a boolean if the word guessed by the user is correct or not.
   */
  function isGuessCorrect(guessWord) {
    return (
      (
        showRevealedLetters(
          Math.round(
            (numberOfAnswersCorrect() / quiz?.questions.length) *
              gameWord.length
          )
        ) + guessWord
      ).toLowerCase() === gameWord?.toLowerCase()
    );
  }

  /**
   * @function submitAnswer takes the boolean from isGuessCorrect and patches the users score and routes them to see if their answer is correct or not
   * @param {String} guessWord
   */
  function submitAnswer(guessWord) {
    console.log("this is the quiz.id: " + quiz?.id);
    //set solved increases quiz count by one, and makes it so quiz is complete in database
    setSolved(quiz?.id);
    if (isGuessCorrect(guessWord)) {
      updateAggregateScore();
      navigate(`/game/score/correct/${id}`);
    } else navigate(`/game/score/incorrect/${id}`);
  }

  /**
   * @description updateAggregateScore updates a users score in the database via the useUpdateUserMutation, checks for the quiz the user is playing and updates their quiz score by the current question they are on.
   */
  const updateAggregateScore = async () => {
    await updateUser({
      id: quiz?.user_id,
      quizScore: 11 - currentQuestion,
    }).unwrap();
  };

  return (
    <>
      <section id="imageContainer">
        <img id="image" className={blurClass} src={image_word?.image_url} />
      </section>
      <section>
        <p id="answerGridTitle">Fill in the Empty Letters to Solve</p>
        <form>
          <div id="answerGrid">
            {gameWord?.split("").map((letter, index) => {
              const revealedCount = Math.round(
                (numberOfAnswersCorrect() / quiz?.questions.length) *
                  gameWord.length
              );
              return (
                <div key={index}>
                  {index < revealedCount ? (
                    <p id="revealedLetter">{letter}</p>
                  ) : (
                    <input
                      ref={ref=>itemsRef.current.push(ref)}
                      name={`code-${index}`}
                      id="userLetter"
                      maxLength="1"
                      key={index}
                      value={userInput[index]}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </form>
      </section>
      <section id="gameHomeButtons">
        <form onSubmit={(e) => submitAnswer(userInput.join(""))}>
          <button id="button" type="submit">
            Solve
          </button>
        </form>
        {!quiz?.quiz_completed && (
          <button id="button">
            <Link id="link" to={`/game/quiz/${id}`}>
              Ready for Next Question?
            </Link>
          </button>
        )}
      </section>
    </>
  );
}
