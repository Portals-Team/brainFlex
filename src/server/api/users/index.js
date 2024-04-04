const prisma = require("../../prisma");
const router = require("express").Router();
module.exports = router;

// GET /api/users/ get all users
router.get("/", async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();
    if (!users) {
      return next({
        status: 404,
        message: "No Users found",
      });
    }
    res.json(users);
  } catch (e) {
    next(e);
  }
});

router.get("/me", async (req, res, next) => {
  try {
    if (!res.locals.user) {
      return next({
        status: 400,
        message: "You are not logged into the correct account",
      });
    }
    const { id } = res.locals.user;
    const user = await prisma.user.findUnique({
      where: { id: +id },
      include: {
        user_topics: {
          include: {
            Topics: true,
          },
        },
        quizzes: true,
      },
    });
    if (!user) {
      return next({
        status: 400,
        message: `No user found with id ${id}`,
      });
    }
    res.json(user);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { id: +id },
      include: {
        user_topics: {
          include: {
            Topics: true,
          },
        },
        quizzes: true,
      },
    });
    if (!user) {
      return next({
        status: 400,
        message: `No user found with id ${id}`,
      });
    }
    res.json(user);
  } catch (e) {
    next(e);
  }
});

// PATCH /api/users/:id patch users quiz score by id
router.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { quizScore } = req.body;

  try {
    if (!res.locals.user) {
      return next({
        status: 400,
        message: "You are not logged into the correct account",
      });
    }

    const user = await prisma.user.findFirst({ where: { id: +id } });

    if (!user) {
      return next({
        status: 400,
        message: `No user found with id ${id}`,
      });
    }

    const updatedUser = await prisma.user.update({
      where: { id: +id },
      data: {
        aggregate_score: user.aggregate_score + +quizScore,
      },
    });

    if (!updatedUser) {
      return next({
        status: 401,
        message: "Update invalid, please try again",
      });
    }

    res.json(updatedUser);
  } catch (e) {
    next(e);
  }
});
