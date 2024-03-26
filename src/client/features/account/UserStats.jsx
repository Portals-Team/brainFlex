// import {useGetMeQuery} from "../auth/authSlice";

export default function UserStats() {
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
      {/* <section className="topTopics">
        <article>
          {usertopics.map((usertopic) => {
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
          })}
        </article>
        <NavLink to="/topics">
          <button>Change Topics</button>
        </NavLink>
      </section>
      <section className="userRank">
        <article>
          Your rank:{" "}
          {
            //rank formula
          }
        </article>
        <article>Amount of score you need to get to next rank</article>
        <article>
          next rank:
          {
            //currentrank++
          }
        </article>
      </section>
      <section className="hello">
        <p>Hello {me.name}</p>
      </section>
      <section className="topPlayers">
        {
          //mapping top players method
        }
      </section> */}
      <p>User Stats page</p>
    </>
  );
}
