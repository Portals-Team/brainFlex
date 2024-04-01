import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from "react";
import {
  useGetImageWordQuery,
  useGetGameQuery,
  useUpdatedUserMutation,
} from "./gameSlice";

import "./game.css";

const calculateScore = (currentquestion) => {
  const yourScore = 11 - currentquestion;
  return yourScore + "/10";
};

export default function GameScoreCorrect() {
  const { id } = useParams();
  const { data: quiz } = useGetGameQuery(id);
  const { data: imageandword } = useGetImageWordQuery(quiz?.image_Word_id);
  const [updateUser] = useUpdatedUserMutation();

  return (
    <>
      <section id="imageContainer">
        <img id="image" src={imageandword?.image_url} />
      </section>
      <section id="correctAnswer">
        <h1>Correct! : {imageandword?.topic_word}</h1>
      </section>
      <section>
        <p id="quizScore">
          FINAL QUIZ SCORE: {calculateScore(quiz?.current_question)}
        </p>
      </section>
      <section>
        <button id="buttonGame">
          {/* there is no longer a dashboard page*/}
          <Link id="link" to="/dashboard">
            HOME
          </Link>
        </button>
      </section>
    </>
  );
}
