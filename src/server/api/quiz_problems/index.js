const prisma = require("../../prisma");
const router = require("express").Router();
module.exports = router;


// GET /api/quiz_problems/:id
router.get("/:id", async (req, res, next) => {
    try {
      const {id} = +req.params;
      const quizProblems = await prisma.quiz_problems.findMany({ where: { id } });
      res.json(quizProblems);
    } catch {
      next();
    }
});
 
// PATCH /api/quiz_problems/:id
router.patch("/:id", async (req, res, next) => {
    const { user_answer } = req.body;
    const { id } = req.params;
    try {
      if(!res.locals.user) {
        return next({
            status: 400,
            message: "You are not logged into the correct account"
        });
      }
      
      const quizProblemId = +id;
      if (error.code === "P2025") {
        return next({
          status: 404,
          message: `Quiz problem with id ${id} not found.`
        });
      } 
      const updateProblem = await prisma.quiz_problems.update({
        where: { id: quizProblemId },
        data: { user_answer },
      });
      if (!updateProblem) {
        return next({
          status: 500,
          message: "An error occurred while updating the quiz problem."
        });
      }
      res.json(updateProblem);
    } catch (error) {
      next(error);
    }
});