import {
  useGetImageWordQuery,
  useGetGameQuery,
  useUpdatedUserMutation,
} from "../game/gameSlice";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

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

  const handleInputChange = (index, value) => {
    const updatedInput = [...userInput];
    updatedInput[index] = value;
    setUserInput(updatedInput);
  };

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

  function showRevealedLetters(numberOfCorrectQuestions) {
    let revealedLetters = "";
    for (let i = 0; i < numberOfCorrectQuestions - 1; i++) {
      revealedLetters += gameWord?.charAt(i);
    }
    return revealedLetters;
  }

  function isGuessCorrect(guessWord) {
    return (
      (
        showRevealedLetters(numberOfCorrectQuestions) + guessWord
      ).toLowerCase() === gameWord?.toLowerCase()
    );
  }

  function submitAnswer(guessWord) {
    if (isGuessCorrect(guessWord)) {
      updateAggregateScore();
      navigate(`/game/score/correct/${id}`);
    } else navigate(`/game/score/incorrect/${id}`);
  }

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
              const currentAcc = acc++;
              return currentAcc < numberOfCorrectQuestions ? (
                <p id="revealedLetter">{letter}</p>
              ) : (
                <input
                  id="userLetter"
                  maxLength="1"
                  key={index}
                  value={userInput[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
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
        <button id="button">
          <Link id="link" to={`/game/quiz/${id}`}>
            Ready for Next Question?
          </Link>
        </button>
      </section>
    </>
  );
}
