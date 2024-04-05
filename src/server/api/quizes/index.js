const { parse } = require("dotenv");
const prisma = require("../../prisma");
const game = require("express").Router();
module.exports = game;

// GET /api/quizes/ get all quizes
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

// GET /api/quizes/:id get quizes by id and include the relation to the questions of that quiz
game.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    // if (!res.locals.user) {
    //   return next({
    //     status: 401,
    //     message: "You are not allowed to access this information. Please Log In"
    //   });
    // }
    const quizById = await prisma.quiz.findUnique({
      where: {
        id: +id,
        // user_id: res.locals.user.id,
      },
      //what this does is it gets the quiz, and also joins it with the questions table because they have a relational foreign key, and it then joins the quiz_problems table with their associated questions.
      include: {
        questions: {
          include: {
            question: true,
          },
        },
      },
    });
    res.json(quizById);
  } catch (e) {
    next(e);
  }
});

// PATCH /api/quizes/:id  -- updates current_question. GO BACK TO THIS
game.patch("/:id", async (req, res, next) => {
  // Make sure this works the way you want
  const { id } = req.params;
  const { solved } = req.body;
  try {
    // if (!res.locals.user) {
    //   return next({
    //     status: 401,
    //     message:
    //       "You are not allowed to access this information. Please Log In",
    //   });
    // }
    const currentQuiz = await prisma.quiz.findUnique({
      where: {
        id: +id,
        // user_id: res.locals.user.id,
      },
    });
    // this finds the current quiz
    if (solved === true) {
      const currentQuiz = await prisma.quiz.findUnique({
        where: {
          id: +id,
          // user_id: res.locals.user.id,
        },
      });
      //this finds the user whos quiz that is
      const user = await prisma.user.findFirst({
        where: { id: currentQuiz.user_id },
      });
      // this increases their quiz count by one if they have pressed solve.
      const updatedUser = await prisma.user.update({
        where: { id: currentQuiz.user_id },
        data: {
          quiz_count: user.quiz_count + 1,
        },
      });
      const updatedQuizCompleted = await prisma.quiz.update({
        where: {
          id: +id,
          //user_id: res.locals.user.id,
        },
        data: {
          quiz_completed: true,
        },
      });
      res.json(updatedQuizCompleted);
    }

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
          //user_id: res.locals.user.id,
        },
        data: {
          quiz_completed: true,
        },
      });
      res.json(updatedQuizCompleted);
    }
    if (currentQuiz.current_question < 10 && !solved) {
      const updatedQuizQuestions = await prisma.quiz.update({
        where: {
          id: +id,
          //user_id: res.locals.user.id,
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

game.post("/", async (req, res, next) => {
  const { user_Id, category_Id, topic_Id, questionsarray, image_Word_Id } =
    req.body;
  try {
    console.log(
      "userID: ",
      user_Id,
      " categoryId: ",
      category_Id,
      "topicID: ",
      topic_Id,
      " questionsArray: ",
      questionsarray,
      " imageWordID: ",
      image_Word_Id
    );
    const newQuiz = await prisma.quiz.create({
      data: {
        User: { connect: { id: +user_Id } },
        category: { connect: { id: +category_Id } },
        topic: { connect: { id: +topic_Id } },
        quiz_completed: false,
        image_word: { connect: { id: +image_Word_Id } },
        current_question: 1,
      },
    });

    for (i = 0; i < questionsarray.length; i++) {
      await prisma.quiz_problems.create({
        data: {
          quiz: { connect: { id: newQuiz.id } },
          question: { connect: { id: questionsarray[i] } },
        },
      });
    }
    // const quizWithQuestions = await prisma.quiz.update({
    //   where: { id: newQuiz.id },
    //   data: {
    //     questions: {
    //       connect: JSON.parse(questionsarray).map((questionId) => ({
    //         id: +questionId,
    //       })),
    //     },
    //   },
    // });
    res.json(newQuiz);
  } catch (e) {
    next(e);
  }
});
