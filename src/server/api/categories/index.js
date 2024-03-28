const prisma = require("../../prisma");
const router = require("express").Router();
module.exports = router;

// Get /api/categories
router.get("/", async (req, res, next) => {
  try {
    const categories = await prisma.categories.findMany();
    res.json(categories);
  } catch (e) {
    next(e);
  }
});
