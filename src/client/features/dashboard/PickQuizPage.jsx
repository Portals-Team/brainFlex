import { useSelector } from "react-redux";
import { selectToken } from "../auth/authSlice";
import { useSelector } from "react-redux";
import {
  useGetUserTopicsQuery,
  useGetTopicQuery,
} from "../dashboard/dashboardSlice";

export default function PickQuizPage() {
  const { data: usertopics } = useGetUserTopicsQuery();
  const { data: topicsdata } = useGetTopicQuery();

  function getUserTopicById(id) {
    //gets all information for a specific user topic from the id of that user_topic
    const userTopics = usertopics.id;
    return userTopics.topic_id;
  }

  function getTopicName(id) {
    //this gets all information about a topic from a topic_id
    const topicById = topicsdata.id;
    return topicById.name;
  }

  return (
    <>
      <h1>Pick Quiz To Play!</h1>
      {usertopics ? (
        usertopics.map((usertopic) => {
          const topic_id = getUserTopicById(usertopic.id);
          const topicName = getTopicName(topic_id);
          return (
            <div>
              <h1> {topicName} </h1>
              <NavLink to="/game">
                <button>Play now!</button>
              </NavLink>
            </div>
          );
        })
      ) : (
        <h1>Please Select User Topics</h1>
      )}
    </>
  );
}
