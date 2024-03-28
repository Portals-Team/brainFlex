const prisma = require("../../prisma");
const router = require("express").Router();
module.exports = router;

// Get /api/categories
router.get("/", async (req, res, next) => {
  try {
    const categories = await prisma.categories.findMany({
      include: {
        Category_topics: {
          // Adjust this if your relation name differs
          include: {
            topic: true, // Adjust this based on your actual relation field name
          },
        },
      },
    });
    res.json(categories);
  } catch (e) {
    next(e);
  }
});
