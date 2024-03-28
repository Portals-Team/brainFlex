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

//write PATCH /api/user_topics/
router.patch("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { topicIds } = req.body;
  try {
    // if you do already have 3 topics, we gotta delete them
    const user_topics = await prisma.user_topics.findMany({
      where: {
        user_id: +id,
      },
    });

    if (user_topics.length) {
      for (const user_topic of user_topics) {
        await prisma.user_topics.delete({
          where: {
            id: user_topic.id,
          },
        });
      }
    }

    // make sure we're logged in

    const user_topics_arr = [];
    // if we dont have any topics
    for (const topicId of topicIds) {
      const user_topic = await prisma.user_topics.create({
        data: {
          user_id: +id,
          topic_id: +topicId,
        },
      });
      user_topics_arr.push(user_topic);
    }

    res.json(user_topics_arr);
  } catch (error) {
    next(error);
  }
});
