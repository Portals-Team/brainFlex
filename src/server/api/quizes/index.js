const prisma = require("../../prisma");
const game = require("express").Router();
module.exports = game;

// GET /api/quizes/
game.get("/", async (req, res, next) => {
  try {
    const quizes = await prisma.quiz.findMany();
    if (!users) {
      return next({
        status: 404,
        message: "No Quizes found",
      });
    }
    res.json(quizes);
  } catch (e) {
    next(e);
  }
});

// GET /api/quizes/:id
game.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!res.locals.user) {
      return next({
        status: 401,
        message:
          "You are not allowed to access this information. Please Log In",
      });
    }
    const quizById = await prisma.quiz.findUnique({
      where: {
        id: +id,
        user_id: res.locals.user.id,
      },
    });
    res.json(quizById);
  } catch (e) {
    next(e);
  }
});

// PATCH /api/quizes/:id  -- updates current_question
game.patch("/:id", async (req, res, next) => {
  // Make sure this works the way you want
  const { id } = req.params;
  const { solved } = req.body;
  try {
    if (!res.locals.user) {
      return next({
        status: 401,
        message:
          "You are not allowed to access this information. Please Log In",
      });
    }
    if (solved) {
      const updatedQuizCompleted = await prisma.quiz.update({
        where: {
          id: +id,
          user_id: res.locals.user.id,
        },
        data: {
          quiz_completed: true,
        },
      });
    }
    const currentQuiz = await prisma.quiz.findUnique({
      where: {
        id: +id,
        user_id: res.locals.user.id,
      },
    });
    if (currentQuiz.quiz_completed) {
      return next({
        status: 500,
        message: "Quiz is already completed",
      });
    }
    if (currentQuiz.current_question === 10) {
      const updatedQuizCompleted = await prisma.quiz.update({
        where: {
          id: +id,
          user_id: res.locals.user.id,
        },
        data: {
          quiz_completed: true,
        },
      });
      res.json(updatedQuizCompleted);
    }
    if (currentQuiz.current_question < 10) {
      const updatedQuizQuestions = await prisma.quiz.update({
        where: {
          id: +id,
          user_id: res.locals.user.id,
        },
        data: {
          current_question: currentQuiz.current_question + 1,
        },
      });
      res.json(updatedQuizQuestions);
    }
  } catch (e) {
    next(e);
  }
});

// POST /api/quizes =>
//    Create the Quiz
//    Associate all questions with the newly created quiz
