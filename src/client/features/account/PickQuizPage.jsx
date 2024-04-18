import { useNavigate, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

import { useGetMeQuery, useGetUserQuery } from "./accountSlice";
import { useGetTopicsQuery } from "./accountSlice";
import { useGetTopicByIdQuery } from "./accountSlice";
import { useCreateNewQuizMutation } from "./accountSlice";

/**
 *
 * @function TopicCard
 * @returns will create a quiz for a users choosen topics when the play quiz button is clicked
 */
function TopicCard({ topic }) {
  const { data: user } = useGetMeQuery();
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
        user_Id: user?.id,
        category_Id: topicInformation?.Categories_topics[0].category_id,
        topic_Id: topicInformation?.id,
        questionsarray: arrayOfTopics,
        image_Word_Id: image_topic_id,
      });
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
 * @component PickQuizPage returns a list of quizes the logged in user can play from their choosen topcis. If they have played a quiz on current day or if they have started a quiz but have not completed it on the current day it will return a message.
 */
export default function PickQuizPage() {
  const { data: user } = useGetMeQuery();
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
      for (let i = 0; i < user?.quizzes.length; i++) {
        const thedate = new Date(user?.quizzes[i].date_time).toString();
        const datechanged = thedate.split(" ").slice(1, 4).join(" ");
        if (datechanged === Date().split(" ").slice(1, 4).join(" ")) {
          foundQuizToday = true;
          todaysQuiz = user?.quizzes[i].id;
          if (user?.quizzes[i].quiz_completed === true) {
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
          <section id="pickQuizMessageSection">
            <p className="pickQuizMessage">
              You have already completed a quiz today.{" "}
            </p>
            <p className="pickQuizMessage">
              Come back tomorrow for a new quiz!
            </p>
          </section>
        );
      } else {
        let currentQuiz = user?.quizzes.filter(
          (quiz) => quiz.id === todaysQuiz
        );
        //checks to see the current quiz question the user is on in a quiz that has not been completed.
        let currentQuizQuestion = currentQuiz[0]?.current_question;
        let currentQuizIndexed = currentQuiz[0];
        let currentQuizTopicId = currentQuiz[0]?.topic_id;
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
            {user?.user_topics?.map(({ Topics }) => (
              <TopicCard key={Topics?.id} topic={Topics} />
            ))}
          </ul>
        </div>
      );
    }
  };

  return (
    <>
      <header id="pickQuizHeadline">Pick Quiz Page</header>
      <article>
        <p id="pickQuizTag">Your Topics: </p>
        <section id="pickQuizSection">{showCreateContinueFinished()}</section>
      </article>
    </>
  );
}
