import { Link, useNavigate, NavLink } from "react-router-dom";
import { useGetMeQuery } from "./accountSlice";
import { useGetUsersQuery } from "./accountSlice";
import { useGetTopicsQuery } from "./accountSlice";
import { useGetTopicByIdQuery } from "./accountSlice";
import { useCreateNewQuizMutation } from "./accountSlice";

import "./account.css";

function TopicCard({ topic }) {
  //logic for creating a new quiz
  //first get everything associated with that particular topic
  const {data: me} = useGetMeQuery();
  const id = me?.id;
  const navigate = useNavigate();
  let { data: topicInformation } = useGetTopicByIdQuery(topic?.id);
  let [createNewQuiz] = useCreateNewQuizMutation();

  //this function gets a random image word
  function getRandomImageWord() {
    const randomImageIndex = Math.floor(
      Math.random() * topicInformation.Image_Word.length
    );
    console.log(topicInformation.Image_Word[randomImageIndex].id);
    return topicInformation.Image_Word[randomImageIndex].id;
  }

  function getRandomQuizIds() {
    const arrayOfTopics = [];
    const numberArray = Array.from(
      { length: topicInformation.Question.length - 1 },
      (_, i) => i + 1
    );
    const shuffledNumbers = numberArray.sort(() => Math.random() - 0.5);
    const firstTen = shuffledNumbers.slice(0, 10);
    for (let i = 0; i < firstTen.length; i++) {
      const quiz_id = topicInformation.Question[firstTen[i]];
      arrayOfTopics.push(quiz_id.id);
    }
    return arrayOfTopics;
  }

  const createQuiz = async (evt) => {
    evt.preventDefault();
    try {
      const image_topic_id = getRandomImageWord();
      const arrayOfTopics = getRandomQuizIds();
      console.log(arrayOfTopics);
      console.log(topicInformation?.Categories_topics[0].category_id);
      const newQuiz = await createNewQuiz({
        user_Id: +me?.id,
        category_Id: topicInformation?.Categories_topics[0].category_id,
        topic_Id: topicInformation?.id,
        questionsarray: arrayOfTopics,
        image_Word_Id: image_topic_id,
      });
      console.log(newQuiz);
      //found quiz today is if there is a quiz for that user that exists today

      //isfoundquizcompleted is if it finds a quiz for that user today, is that quiz completed or not
      //if there is a quiz that already exists for today, then this is the id of that quiz

      navigate(`/game/home/${newQuiz.data.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li>
      <p id="topicName">{topic?.name}</p>
      <form onSubmit={createQuiz}>
        <button id="playQuizButton">Play Quiz</button>
      </form>
      {/* make this button a Link tag to generated quiz for the users picked topic*/}
    </li>
  );
}

function UserScores({ user }) {
  return (
    <ul>
      <h3>{user?.name}</h3>
      <li id="topUserScores">Score: {user?.aggregate_score}</li>
    </ul>
  );
}

export default function UserStats() {
  const {data: me} = useGetMeQuery();
  const id = me?.id;
  const { data: users } = useGetUsersQuery();
  let { data: alltopics } = useGetTopicsQuery();

  //
  const showCreateContinueFinished = () => {
    //found quiz today is if there is a quiz for that user that exists today
    let foundQuizToday = false;
    //isfoundquizcompleted is if it finds a quiz for that user today, is that quiz completed or not
    let isFoundQuizCompleted = null;
    //if there is a quiz that already exists for today, then this is the id of that quiz
    let todaysQuiz = null;
    const isThereAQuiz = () => {
      //this function looks at all of a users quizzes, then for each of them takes the datetime of that quiz
      // and converts it to month date year format, then compares it to todays date in the same format
      // it then for each of the quizes if it finds a quiz, sets foundquiz today to true, and then after that sees if that quiz is completed.
      // there should never be more than one quiz for a user on a day, so shouldnt run into overlap
      for (let i = 0; i < me?.quizzes.length; i++) {
        const thedate = new Date(me?.quizzes[i].date_time).toString();
        const datechanged = thedate.split(" ").slice(1, 4).join(" ");
        if (datechanged === Date().split(" ").slice(1, 4).join(" ")) {
          foundQuizToday = true;
          todaysQuiz = me?.quizzes[i].id;
          if (me?.quizzes[i].quiz_completed === true) {
            isFoundQuizCompleted = true;
          } else {
            false;
          }
        }
      }
    };
    //this calls the isthereaquiz function
    isThereAQuiz();
    //this logic uses found quiz today and isfoundquizcompleted to see one if there is a found quiz,
    //if there is a found quiz, it checks to see if that quiz is completed or not. if it is completed already,
    //then it will say you have already done your quiz for the day come back tomorrow. if you have a quiz
    // that is incomplete for today, then it will navigate you to continue that quiz
    // if no quiz found for today, then will show you your topics you can take a quiz on.
    if (foundQuizToday === true) {
      if (isFoundQuizCompleted === true) {
        return (
          <>
            <p className="quizMessage">
              You have already completed a quiz today.{" "}
            </p>
            <p className="quizMessage">Come back tomorrow for a new quiz!</p>
          </>
        );
      } else {
        //this looks through all of the quizes that player has and finds the one where the quiz.id is the
        //todaysquiz id that was stored previously
        let currentQuiz = me?.quizzes.filter(
          (quiz) => quiz.id === todaysQuiz
        );
        let currentQuizQuestion = currentQuiz[0]?.current_question;
        //this gets the index 0 of the new array that was made from the filter
        let currentQuizIndexed = currentQuiz[0];
        let currentQuizTopicId = currentQuiz[0]?.topic_id;
        console.log(currentQuizIndexed);
        let currentQuizTopic = alltopics?.filter(
          (topic) => topic.id === currentQuizTopicId
        );

        return (
          <>
            <p className="quizMessage">Current Quiz Information: </p>
            <p className="quizMessage">
              Current Quiz Topic:{currentQuizTopic?.[0].name}
            </p>
            <p className="quizMessage">
              Current Quiz Question:{currentQuizQuestion}
            </p>
            <NavLink to={`/game/home/${currentQuizIndexed.id}`}>
              <button id="continueQuizButton">To Continue Quiz</button>
            </NavLink>
          </>
        );
      }
    } else {
      return (
        <div id="yourTopicsCard">
          <h3 id="yourTopicsHeadline">Your Topics: </h3>
          <ul>
            {me?.user_topics?.map(({ Topics }) => (
              <TopicCard key={Topics?.id} topic={Topics} />
            ))}
          </ul>
        </div>
      );
    }
  };
  return (
    <>
      <article id="userStats">
        <section>
          <div id="userCard">
            <h3 id="userCardHeadline">Welcome {me?.name}!</h3>
            <p id="userCardItem">Username: {me?.username}</p>
            <p id="userCardItem">Aggregate Score: {me?.aggregate_score}</p>
            <p id="userCardItem">Quiz Count: {me?.quiz_count}</p>
          </div>
          {showCreateContinueFinished()}
          {/* <div id="yourTopicsCard">
            <h3 id="yourTopicsHeadline">Your Topics: </h3>
            <ul>
              {user?.user_topics?.map(({ Topics }) => (
                <TopicCard key={Topics?.id} topic={Topics} />
              ))}
            </ul>
          </div> */}
          <div>
            <button id="changeTopicsButton">
              <Link to={`/topics/${id}`}>Change Topics</Link>
            </button>
          </div>
        </section>
        <section>
          {/*<div>
            <h3>YOUR RANK</h3>
            <h4>*this is still to be determined*</h4>
              </div>*/}
          <div id="topPlayersCard">
            <h3 id="topPlayersHeadline">Top Players:</h3>
            <ul id="topPlayers">
              {users?.length > 0 &&
                [...users]
                  .sort((a, b) => b.aggregate_score - a.aggregate_score)
                  .slice(0, 3)
                  .map((user) => <UserScores key={user?.id} user={user} />)}
            </ul>
          </div>
        </section>
      </article>
    </>
  );
}
