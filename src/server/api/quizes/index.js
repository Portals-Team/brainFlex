const prisma = require("../../prisma");
const game = require("express").Router();
module.exports = game;

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
  
  // PATCH /api/quizes/:id
  game.patch("/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      if (!res.locals.user) {
        return next({
          status: 401,
          message:
            "You are not allowed to access this information. Please Log In",
        });
      }
      const currentQuiz = await prisma.quiz.findUnique({
        where: {
          id: +id,
          user_id: res.locals.user.id,
        },
      });
      if (currentQuiz.current_question === 10) {
        return next({
          status: 401,
          message:
            "You are already on question 10, a quiz cannot have more than 10 questions",
        });
      }
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
    } catch (e) {
      next(e);
    }
  });
  
  // PATCH /api/quizes/:id
  game.patch("quiz/:id", async (req, res, next) => {
    const { id } = req.params;
    try {
      if (!res.locals.user) {
        return next({
          status: 401,
          message:
            "You are not allowed to access this information. Please Log In",
        });
      }
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
    } catch (e) {
      next(e);
    }
  });