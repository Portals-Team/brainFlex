const prisma = require("../../prisma");
const router = require("express").Router();
module.exports = router;

// GET /api/image_words/ get all image words
router.get("/", async (req, res, next) => {
  try {
    const image_words = await prisma.image_word.findMany();
    if (!image_words) {
      return next({
        status: 404,
        message: "No image words found",
      });
    }
    res.json(image_words);
  } catch (e) {
    next(e);
  }
});

// GET /api/image_words/:id get image word by id and include its relation the Quiz table
router.get("/:id", async (req, res, next) => {
  try {
    if (!res.locals.user) {
      return next({
        status: 400,
        message: "You are not logged into the correct account"
      });
    }
    const id = +req.params.id;
    const imageWord = await prisma.image_word.findUnique({
      where: { id },
      include: {
        Quiz: true,
      },
    });
    res.json(imageWord);
  } catch {
    next();
  }
});
