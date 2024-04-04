import { Link, useNavigate, NavLink } from "react-router-dom";
import { useGetMeQuery } from "./accountSlice";
import { useGetUsersQuery } from "./accountSlice";
import { useGetTopicsQuery } from "./accountSlice";
import { useGetTopicByIdQuery } from "./accountSlice";
import { useCreateNewQuizMutation } from "./accountSlice";

import "./account.css";

/**
 *
 * @function TopicCard
 * @returns will create a quiz for a users choosen topics when the play quiz button is clicked
 */
function TopicCard({ topic }) {
  const { data: me } = useGetMeQuery();
  const id = me?.id;
  const navigate = useNavigate();
  let { data: topicInformation } = useGetTopicByIdQuery(topic?.id);
  let [createNewQuiz] = useCreateNewQuizMutation();

  /**
   *
   * @function getRandomImageWord
   * @returns a random image word for the choosen user topic by id.
   */
  function getRandomImageWord() {
    const randomImageIndex = Math.floor(
      Math.random() * topicInformation.Image_Word.length
    );
    console.log(topicInformation.Image_Word[randomImageIndex].id);
    return topicInformation.Image_Word[randomImageIndex].id;
  }

  /**
   *
   * @function getRandomQuizIds
   * @description creates an array of 10 random questions from all of the questions of the choosen topic.
   * @returns a set of 10 questions for a quiz.
   */
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

  /**
   *
   * @function createQuiz
   * @description creates a new quiz with an random image, its answer word and ten random questions all related to the users chosen topic.
   * @returns createQuiz is actived by the play quiz button and navigates the user to the created quiz for that topic.
   */
  const createQuiz = async (evt) => {
    evt.preventDefault();
    try {
      const image_topic_id = getRandomImageWord();
      const arrayOfTopics = getRandomQuizIds();
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

      navigate(`/game/home/`);
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
    </li>
  );
}

/**
 *
 * @function UserScores
 * @returns a list of the top three players of the game and their aggreate score.
 */
function UserScores({ user }) {
  return (
    <ul>
      <h3>{user?.name}</h3>
      <li id="topUserScores">Score: {user?.aggregate_score}</li>
    </ul>
  );
}

/**
 *
 * @component UserStats returns a list of the logged in users account info, their current topics and a list of the top game players/
 */
export default function UserStats() {
  const { data: me } = useGetMeQuery();
  const id = me?.id;
  const { data: users } = useGetUsersQuery();
  let { data: alltopics } = useGetTopicsQuery();

  /**
   *
   * @function showCreateContinueFinished
   * @description declares that no quiz exists of the topic for the day, that there is not a quiz played by the user on the current day and that if there is a quiz for the day that the user has choosen, it has not yet been completed.
   */
  const showCreateContinueFinished = () => {
    let foundQuizToday = false;
    let isFoundQuizCompleted = null;
    let todaysQuiz = null;

    /**
     * @function isThereAQuiz
     * @description checks all of the users quizzes and converts the dateTime of each quiz to a string month, day, year format and compares that string to a string of the current day. If a quiz is found it is set to true in the database and then checks if the quiz has been completed.
     */
    const isThereAQuiz = () => {
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
    isThereAQuiz();

    /**
     * @description checks if there is a quiz for the day and if that quiz has been completed or how many questions into the quiz the user has answered so far.
     * @returns if quiz has been completed a message indicates the user has already done a quiz for the day. Else if the user has started a quiz a message indicates the users current quiz topic and current quiz question as well as a button to navigate the user to continue the quiz at there current unanswered quiz question.
     */
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
        //checks to see the current quiz question the user is on in a quiz that has not been completed.
        let currentQuiz = me?.quizzes.filter((quiz) => quiz.id === todaysQuiz);
        let currentQuizQuestion = currentQuiz[0]?.current_question;
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
            <NavLink to={`/game/home`}>
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
          <div>
            <button id="changeTopicsButton">
              <Link to={`/topics`}>Change Topics</Link>
            </button>
          </div>
        </section>
        <section>
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
