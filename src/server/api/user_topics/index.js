const prisma = require("../../prisma");
const router = require("express").Router();
module.exports = router;

//we don't need this because getUser provides this information
//leave here til final clean up incase we need it
//GET /api/user_topics/:id
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

/**PATCH /api/user_topics/ PATCH new user topics by the users id by first deleting current topics.
 *and if the user hasn't previously picked topics then create them
 */
router.patch("/:id", async (req, res, next) => {
  try {
    // make sure we're logged in
    if(!res.locals.user) {
      return next({
        status: 400,
        message: "You are not logged into the correct account"
      });
    }
    const me = res.locals.user
    const id = me?.id
    const { topicIds } = req.body;
    
    // if user has 3 topics delete them
    const user_topics = await prisma.user_topics.findMany({
      where: {
        user_id: +id,
      },
    });
    
    if (user_topics.length) {
      for (const user_topic of user_topics) {
        await prisma.user_topics.delete({
          where: {
            id: user_topic?.id,
          },
        });
      }
    }
    const user_topics_arr = [];
    // if user has no user_topics create them
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
