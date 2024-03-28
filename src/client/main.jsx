import React from "react";
import ReactDOM from "react-dom/client";

import "./index.less";

import { Provider } from "react-redux";
import store from "./store";

import AuthForm from "./features/auth/AuthForm";
import ChooseTopics from "./features/account/ChooseTopics.jsx";
import UserStats from "./features/account/UserStats.jsx";
import Root from "./layout/Root.jsx";
import GameHome from "./features/game/GameHome.jsx";
import GameScore from "./features/game/GameScore.jsx";
import Quiz from "./features/game/Quiz.jsx";
import QuizAnswer from "./features/game/QuizAnswer.jsx";
import Home from "./features/dashboard/Home.jsx";
import PickQuizPage from "./features/dashboard/PickQuizPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/account/:id", element: <UserStats /> },
      { path: "/topics", element: <ChooseTopics /> },
      { path: "/auth", element: <AuthForm /> },
      { path: "/game/home/:id", element: <GameHome /> },
      { path: "/game/score/:id", element: <GameScore /> },
      { path: "/game/quiz/:id", element: <Quiz /> },
      { path: "/game/quiz/answer/:id", element: <QuizAnswer /> },
      { path: "/dashboard", element: <Home /> },
      { path: "/dashboard/pick", element: <PickQuizPage /> },
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
