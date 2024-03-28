import { useParams } from "react-router-dom";
import { useGetUserQuery } from "./accountSlice";
import { useGetTopicsQuery } from "./accountSlice";
import { useGetUserTopicsQuery } from "./accountSlice";
import { useGetUsersQuery } from "./accountSlice";

function UserScores({ user }) {
  return (
    <ul>
      <li>{user.name}</li>
      <li>{user.aggregate_score}</li>
    </ul>
  );
}

function TopicCard({ topic }) {
  return (
    <li>
      <h4>{topic.name}</h4>
    </li>
  );
}

export default function UserStats() {
  const { id } = useParams();
  const { data: users } = useGetUsersQuery();
  const { data: user } = useGetUserQuery(id);
  const { data: topics } = useGetTopicsQuery();
  const { data: userTopics } = useGetUserTopicsQuery(id);

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
        <h2>{user?.name}'s Topics: </h2>
        <ul>
          {userTopicPicks?.map((topic) => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
          <button>Change topics</button>
        </ul>
      </div>
      <div>
        <h3>YOUR RANK</h3>
        <h4>*this is still to be determined*</h4>
      </div>
      <div>
        <h3>TOP PLAYERS:</h3>
        <ul>
          {[...users]
            .sort((a, b) => b.aggregate_score - a.aggregate_score)
            .slice(0, 3)
            .map((user) => (
              <UserScores key={user.id} user={user} />
            ))}
        </ul>
      </div>
    </>
  );
}
