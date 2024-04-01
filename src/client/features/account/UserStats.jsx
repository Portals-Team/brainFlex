import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useGetUserQuery } from "./accountSlice";
import { useGetUsersQuery } from "./accountSlice";
import { useGetTopicByIdQuery } from "./accountSlice";

import "./account.css";

function TopicCard({ topic }) {
  //logic for creating a new quiz
  //first get everything associated with that particular topic
  let { data: topicInformation } = useGetTopicByIdQuery(topic?.id);

  //this function gets a random image word
  function getRandomImageWord() {
    const randomImageIndex = Math.floor(
      Math.random() * topicInformation.Image_Word.length
    );
    console.log(topicInformation.Image_Word[randomImageIndex]);
    return topicInformation.Image_Word[randomImageIndex];
  }

  function getRandomQuizIds() {
    const numberArray = Array.from(
      { length: topicInformation.Question.length - 1 },
      (_, i) => i + 1
    );
    const shuffledNumbers = numberArray.sort(() => Math.random() - 0.5);
    const firstTen = shuffledNumbers.slice(0, 10);
    for (let i = 0; i < firstTen.length; i++) {
      console.log(topicInformation.Question[firstTen[i]]);
    }
  }

  const createNewQuiz = async (evt) => {
    evt.preventDefault();
    try {
      getRandomImageWord();
      getRandomQuizIds();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li>
      <p id="topicName">{topic?.name}</p>
      <form onSubmit={createNewQuiz}>
        <button id="playQuizButton">Play Quiz</button>
      </form>
      {/* make this button a Link tag to generated quiz for the users picked topic*/}
    </li>
  );
}

function UserScores({ user }) {
  return (
    <ul>
      <h3>{user?.name}</h3>
      <li id="topUserScores">Score: {user?.aggregate_score}</li>
    </ul>
  );
}

export default function UserStats() {
  const { id } = useParams();
  const { data: users } = useGetUsersQuery();
  const { data: user } = useGetUserQuery(id);

  return (
    <>
      <article id="userStats">
        <section>
          <div id="userCard">
            <h3 id="userCardHeadline">Welcome {user?.name}!</h3>
            <p id="userCardItem">Username: {user?.username}</p>
            <p id="userCardItem">Aggregate Score: {user?.aggregate_score}</p>
            <p id="userCardItem">Quiz Count: {user?.quiz_count}</p>
          </div>

          <div id="yourTopicsCard">
            <h3 id="yourTopicsHeadline">Your Topics: </h3>
            <ul>
              {user?.user_topics?.map(({ Topics }) => (
                <TopicCard key={Topics?.id} topic={Topics} />
              ))}
            </ul>
          </div>
          <div>
            <button id="changeTopicsButton">
              <Link to={`/topics/${id}`}>Change Topics</Link>
            </button>
          </div>
        </section>

        <section>
          {/*<div>
            <h3>YOUR RANK</h3>
            <h4>*this is still to be determined*</h4>
              </div>*/}
          <div id="topPlayersCard">
            <h3 id="topPlayersHeadline">Top Players:</h3>
            <ul id="topPlayers">
              {users?.length > 0 &&
                [...users]
                  .sort((a, b) => b.aggregate_score - a.aggregate_score)
                  .slice(0, 3)
                  .map((user) => <UserScores key={user?.id} user={user} />)}
            </ul>
          </div>
        </section>
      </article>
    </>
  );
}
