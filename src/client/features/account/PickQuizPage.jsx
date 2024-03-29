import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useGetUserQuery } from "./accountSlice";

function TopicCard({ topic }) {
  return (
    <li>
      <h4>{topic?.name}</h4>
      <button>Play {topic?.name} Quiz</button>
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
        <ul>
          {user?.user_topics?.map(({ Topics }) => (
            <TopicCard key={Topics?.id} topic={Topics} />
          ))}
          {/* make this button a Link tag to generated random quiz for the users picked topic*/}
          <button>Play Random Quiz</button>
        </ul>
      </div>
    </>
  );
}
