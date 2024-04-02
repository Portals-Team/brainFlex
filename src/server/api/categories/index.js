const prisma = require("../../prisma");
const router = require("express").Router();
module.exports = router;

// Get /api/categories gets all categories and the topics related to them
router.get("/", async (req, res, next) => {
  try {
    const categories = await prisma.categories.findMany({
      include: {
        Category_topics: {
          include: {
            topic: true,
          },
        },
      },
    });
    res.json(categories);
  } catch (e) {
    next(e);
  }
});
