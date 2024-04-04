import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from "react";
import {
  useGetImageWordQuery,
  useGetGameQuery,
} from "./gameSlice";

import "./game.css";

/**
 *
 * @component GameScoreInorrect returns the final view of the game if the users answer is incorrect. The user can view the unblurred image, the correct answer word and their final score for the game.
 */
export default function GameScoreIncorrect() {
  const { id } = useParams();
  const { data: quiz } = useGetGameQuery(id);
  const { data: imageandword } = useGetImageWordQuery(quiz?.image_Word_id);
  // do we need this? const [updateUser] = useUpdatedUserMutation();

  return (
    <>
      <section id="imageContainer">
        <img id="image" src={imageandword?.image_url} />
      </section>
      <article id="answerInformation">
        <div id="correctAnswer">
          <h1>The Correct Word Was: {imageandword?.topic_word}</h1>
        </div>
        <div id="quizScore">
          <p>FINAL QUIZ SCORE: 0/10</p>
        </div>
      </article>
      <button id="buttonGame">
        <Link id="link" to="/account/id:">
          HOME
        </Link>
      </button>
    </>
  );
}
