import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useGetUserQuery } from "./accountSlice";

function TopicCard({ topic }) {
  return (
    <li>
      <h4>{topic?.name}</h4>
      <button>Play Quiz</button>
      {/* make this button a Link tag to generated quiz for the users picked topic*/}
    </li>
  );
}

export default function PickQuizPage() {
  const { id } = useParams();
  const { data: user } = useGetUserQuery(id);

  return (
    <>
      <h1>Pick Quiz Page</h1>
      <div>
        <h2>Your Topics: </h2>
        <div>
          <ul id="yourTopics">
            {user?.user_topics?.map(({ Topics }) => (
              <TopicCard key={Topics?.id} topic={Topics} />
            ))}
          </ul>
        </div>
        {/* make this button a Link tag to generated random quiz for the users picked topic*/}
        <button>Play Random Quiz</button>
      </div>
    </>
  );
}
