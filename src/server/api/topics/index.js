const prisma = require("../../prisma");
const router = require("express").Router();
module.exports = router;

//GET /api/topics
router.get("/", async (req, res, next) => {
  try {
    const topics = await prisma.topics.findMany();
    res.json(topics);
  } catch (e) {
    next(e);
  }
});
