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

//get topics by id and include it's relational connection to the tables listed below
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const topicById = await prisma.topics.findUnique({
      where: {
        id: +id,
      },
      include: {
        user_topics: true,
        Quiz: true,
        Question: true,
        Categories_topics: true,
        Image_Word: true,
      },
    });
    res.json(topicById);
  } catch (e) {
    next(e);
  }
});
