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
import GameScore from "./features/game/GameScore.jsx";
import Quiz from "./features/game/Quiz.jsx";
import QuizAnswer from "./features/game/QuizAnswer.jsx";
import PickQuizPage from "./features/account/PickQuizPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/account/:id", element: <UserStats /> },
      { path: "/topics/:id", element: <ChooseTopics /> },
      { path: "/auth", element: <AuthForm /> },
      { path: "/game/home/:id", element: <GameHome /> },
      { path: "/game/score/:id", element: <GameScore /> },
      { path: "/game/quiz/:id", element: <Quiz /> },
      { path: "/game/quiz/answer/:id", element: <QuizAnswer /> },
      { path: "/pickquiz/:id", element: <PickQuizPage /> },
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
