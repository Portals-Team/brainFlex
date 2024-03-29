import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import {
  useGetImageWordQuery,
  useGetGameQuery,
  useUpdatedUserMutation,
} from "./gameSlice";
/*Current question will fetch from the database Quiz_problems to show the tally of how many questions have been answered in the quiz*/

/*Image will be fetched from the database via Image_word table

/*Score will be fetched from the database via the Quiz_problems table to display a tally of how many questions the players got wrong or right*/

/*answer grid will be fetched from the database via the Image_word table
and the full answer will be revealed*/

/*final quiz score will be fetched via ... to display the users final score for the game*/

const calculateScore = (currentquestion) => {
  const yourScore = 11 - currentquestion;
  return yourScore + "/10";
};

export default function GameScoreCorrect() {
  const { id } = useParams();
  const { data: quiz } = useGetGameQuery(id);
  const { data: imageandword } = useGetImageWordQuery(quiz?.image_Word_id);
  const [updateUser] = useUpdatedUserMutation();
  console.log(11 - quiz?.current_question);
  useEffect(() => {
    updateUser({
      id: quiz?.user_id,
      quizScore: 11 - quiz?.current_question,
    });
  }, []);

  return (
    <>
      {/*flex this section into a row*/}
      <section>
        {/*image will be in full focus for the final game score view*/}
        <img src={imageandword?.image_url} />
      </section>
      <section>
        {/*answer grid should be a controlled form*/}
        <h1>The Correct Word Was: {imageandword?.topic_word}</h1>
      </section>
      <section>
        <li>FINAL QUIZ SCORE: {calculateScore(quiz?.current_question)}</li>
      </section>
      <section>
        <Link to="/dashboard">HOME</Link>
      </section>
    </>
  );
}
