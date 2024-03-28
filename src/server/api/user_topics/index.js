const prisma = require("../../prisma");
const router = require("express").Router();
module.exports = router;

//GET /api/user_topics/:id WORKING PROPERLY!
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const userTopics = await prisma.user_topics.findMany({
      where: { user_id: +id },
    });
    res.json(userTopics);
  } catch (e) {
    next(e);
  }
});
