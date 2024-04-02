import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useGetUserQuery } from "./accountSlice";

function TopicCard({ topic }) {
  return (
    <li id="topicCard">
      <h3>{topic?.name}</h3>
      <button id="playQuizButton">Play Quiz</button>
      {/* make this button a Link tag to generated quiz for the users picked topic*/}
    </li>
  );
}

export default function PickQuizPage() {
  const { id } = useParams();
  const { data: user } = useGetUserQuery(id);

  return (
    <>
      <header id="pickQuizHeadline">Pick Quiz Page</header>
      <article>
        <p id="pickQuizTag">Your Topics: </p>
        <section id="pickQuizSection">
          <ul id="pickQuizCard">
            {user?.user_topics?.map(({ Topics }) => (
              <TopicCard key={Topics?.id} topic={Topics} />
            ))}
          </ul>
        </section>
        <section id="buttonSection">
          {/* make this button a Link tag to generated random quiz for the users picked topic*/}
          <button id="playRandomQuizButton">Play Random Quiz</button>
        </section>
      </article>
    </>
  );
}
