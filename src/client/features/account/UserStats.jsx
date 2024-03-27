import { useParams } from "react-router-dom";
import { useGetUserQuery } from "./accountSlice";
import { useGetUserTopicsQuery } from "./accountSlice";

export default function UserStats() {
  const { id } = useParams();
  const { data: user } = useGetUserQuery(id);
  console.log(user);

  const { data: userTopics } = useGetUserTopicsQuery(id);
  console.log(userTopics);
  // const { data: usertopics } = useGetUserTopicsQuery();
  // const { data: topicsdata } = useGetTopicQuery();

  // function getUserTopicById(id) {
  //   //gets all information for a specific user topic from the id of that user_topic
  //   const userTopics = usertopics.id;
  //   return userTopics.topic_id;
  // }

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
    </>
  );
}
