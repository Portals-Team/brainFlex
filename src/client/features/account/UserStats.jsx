import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useGetUserQuery } from "./accountSlice";
import { useGetUsersQuery } from "./accountSlice";

function TopicCard({ topic }) {
  return (
    <li>
      <h4>{topic?.name}</h4>
      <button>Play {topic?.name} Quiz</button>
      {/* make this button a Link tag to generated quiz for the users picked topic*/}
    </li>
  );
}

function UserScores({ user }) {
  return (
    <ul>
      <li>{user?.name}</li>
      <li>Score: {user?.aggregate_score}</li>
    </ul>
  );
}

export default function UserStats() {
  const { id } = useParams();
  const { data: users } = useGetUsersQuery();
  const { data: user } = useGetUserQuery(id);

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
        <h2>Your Topics: </h2>
        <ul>
          {user?.user_topics?.map(({ Topics }) => (
            <TopicCard key={Topics?.id} topic={Topics} />
          ))}
          <button>
            <Link to={`/topics/${id}`}>Change Topics</Link>
          </button>
        </ul>
      </div>
      <div>
        <h3>YOUR RANK</h3>
        <h4>*this is still to be determined*</h4>
      </div>
      <div>
        <h3>TOP PLAYERS:</h3>
        <ul>
          {users?.length > 0 &&
            [...users]
              .sort((a, b) => b.aggregate_score - a.aggregate_score)
              .slice(0, 3)
              .map((user) => <UserScores key={user?.id} user={user} />)}
        </ul>
      </div>
    </>
  );
}
