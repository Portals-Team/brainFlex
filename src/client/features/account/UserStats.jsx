import { useParams } from "react-router-dom";
import { useGetUserQuery } from "./accountSlice";

export default function UserStats() {
  const { id } = useParams();
  const { data: user } = useGetUserQuery(id);
  console.log(user);
  // const {data: me} = useGetMeQuery();
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
      <p>User Stats page</p>
      <p>WELCOME</p>
      <div>
        {/* Example: Display user information */}
        <h1>{user?.name}</h1>
        <p>{user?.email}</p>
        {/* Add more user details here */}
      </div>
    </>
  );
}
