import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useGetUserQuery } from "./accountSlice";
import { useGetTopicsQuery } from "./accountSlice";
import { useGetUserTopicsQuery } from "./accountSlice";

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
  const { data: topics } = useGetTopicsQuery();
  const { data: userTopics } = useGetUserTopicsQuery(id);

  const userTopicPicks = userTopics?.map((userTopics) => {
    return topics?.find((topics) => topics.id === userTopics.topic_id);
  });

  return (
    <>
      <h1>Pick Quiz Page</h1>
      <div>
        <h2>Your Topics: </h2>
        <ul>
          {userTopicPicks?.map((topic) => (
            <TopicCard key={topic?.id} topic={topic} />
          ))}
          {/* make this button a Link tag to generated random quiz for the users picked topic*/}
          <button>Play Random Quiz</button>
        </ul>
      </div>
    </>
  );
}
