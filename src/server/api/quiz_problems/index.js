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
      const quizProblemId = +id;
      const updateProblem = await prisma.quiz_problems.update({
        where: { id: quizProblemId },
        data: { user_answer },
      });
      res.json(updateProblem);
    } catch (error) {
      if (error.code === "P2025") {
        res.status(404).send(`Quiz problem with id ${id} not found.`);
      } else {
        console.error(error);
        res
          .status(500)
          .send("An error occurred while updating the quiz problem.");
      }
    }
});