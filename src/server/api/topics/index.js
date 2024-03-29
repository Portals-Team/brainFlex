const prisma = require("../../prisma");
const router = require("express").Router();
module.exports = router;

//not currently being used because getCategories provides all topics information as well
//Leave for final clean up if we need it
//GET /api/topics
router.get("/", async (req, res, next) => {
  try {
    const topics = await prisma.topics.findMany();
    res.json(topics);
  } catch (e) {
    next(e);
  }
});
