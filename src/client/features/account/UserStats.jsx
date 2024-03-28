import { useParams } from "react-router-dom";
import { useGetUserQuery } from "./accountSlice";
import { useGetTopicsQuery } from "./accountSlice";
import { useGetUserTopicsQuery } from "./accountSlice";

function TopicCard({ topic }) {
  return (
    <section>
      <li>
        <h4>{topic.name}</h4>
      </li>
    </section>
  );
}

export default function UserStats() {
  const { id } = useParams();
  const { data: user } = useGetUserQuery(id);
  console.log(user);

  const { data: topics } = useGetTopicsQuery();
  console.log(topics);

  const { data: userTopics } = useGetUserTopicsQuery(id);
  console.log(userTopics);

  //we've got user topics but each user topic does not have a name and needs to refer to the topics table for its name.

  // const { data: topicsdata } = useGetTopicQuery();

  // function getTopicName(id) {
  //   //this gets all information about a topic from a topic_id
  //   const topicById = topicsdata.id;
  //   return topicById.name;
  // }

  return (
    <>
      <p>User Stats!</p>
      <div>
        {/* Example: Display user information */}
        <h1>Welcome! {user?.name}</h1>
        <p>Username: {user?.username}</p>
        <p>Aggregate Score: {user?.aggregate_score}</p>
        <p>Quiz Count: {user?.quiz_count}</p>
        {/* Add more user details here */}
      </div>
      <h2>Topics:</h2>
      <ul>
        {topics?.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </ul>
    </>
  );
}
