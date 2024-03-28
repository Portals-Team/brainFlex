import { useParams } from "react-router-dom";
import { useGetUserQuery } from "./accountSlice";
import { useGetTopicsQuery } from "./accountSlice";
import { useGetUserTopicsQuery } from "./accountSlice";

function TopicCard({ topic }) {
  return (
    <li>
      <h4>{topic.name}</h4>
    </li>
  );
}

export default function UserStats() {
  const { id } = useParams();
  const { data: user } = useGetUserQuery(id);

  const { data: topics } = useGetTopicsQuery();

  const { data: userTopics } = useGetUserTopicsQuery(id);

  //we've got user topics but each user topic does not have a name and needs to refer to the topics table for its name.

  // const { data: topicsdata } = useGetTopicQuery();

  // function getTopicName(id) {
  //   //this gets all information about a topic from a topic_id
  //   const topicById = topicsdata.id;
  //   return topicById.name;
  // }
  const userTopicPicks = userTopics?.map((userTopics) => {
    return topics?.find((topics) => topics.id === userTopics.topic_id);
  });

  return (
    <>
      <p>User Stats!</p>
      <div>
        <h1>Welcome! {user?.name}</h1>
        <p>Username: {user?.username}</p>
        <p>Aggregate Score: {user?.aggregate_score}</p>
        <p>Quiz Count: {user?.quiz_count}</p>
      </div>
      <div>
        <h2>Topics:</h2>
        <ul>
          {topics?.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </ul>
      </div>
      <div>
        <h2>User Topics: </h2>
        <ul>
          {userTopicPicks?.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </ul>
      </div>
    </>
  );
}
