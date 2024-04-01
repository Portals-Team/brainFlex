import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from "react";
import {
  useGetImageWordQuery,
  useGetGameQuery,
  useUpdatedUserMutation,
} from "./gameSlice";

import "./game.css";

export default function GameScoreIncorrect() {
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
        <h1>The Correct Word Was: {imageandword?.topic_word}</h1>
      </section>
      <section id="quizScore">
        <p>FINAL QUIZ SCORE: 0/10</p>
      </section>
      <section>
        <button id="buttonGame">
          {/*link path should be changed here*/}
          <Link id="link" to="/dashboard">
            HOME
          </Link>
        </button>
      </section>
    </>
  );
}
