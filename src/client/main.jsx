import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { Provider } from "react-redux";
import store from "./store";

import AuthForm from "./features/auth/AuthForm";
import Home from "./features/account/Home.jsx";
import ChooseTopics from "./features/account/ChooseTopics.jsx";
import UserStats from "./features/account/UserStats.jsx";
import Root from "./layout/Root.jsx";
import GameHome from "./features/game/GameHome.jsx";
import GameScoreCorrect from "./features/game/GameScoreCorrect.jsx";
import GameScoreIncorrect from "./features/game/GameScoreIncorrect.jsx";
import Quiz from "./features/game/Quiz.jsx";
import QuizAnswer from "./features/game/QuizAnswer.jsx";
import PickQuizPage from "./features/account/PickQuizPage.jsx";
import HowToPlay1 from "./features/tutorial/HowToPlay1.jsx";
import HowToPlay2 from "./features/tutorial/HowToPlay2.jsx";
import HowToPlay3 from "./features/tutorial/HowToPlay3.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/account/", element: <UserStats /> },
      { path: "/topics/", element: <ChooseTopics /> },
      { path: "/auth", element: <AuthForm /> },
      { path: "/game/home/", element: <GameHome /> },
      { path: "/game/score/correct", element: <GameScoreCorrect /> },
      { path: "/game/score/incorrect", element: <GameScoreIncorrect /> },
      { path: "/game/quiz", element: <Quiz /> },
      { path: "/game/quiz/answer", element: <QuizAnswer /> },
      { path: "/pickquiz/", element: <PickQuizPage /> },
      { path: "/howtoplay/1", element: <HowToPlay1 /> },
      { path: "/howtoplay/2", element: <HowToPlay2 /> },
      { path: "/howtoplay/3", element: <HowToPlay3 /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
