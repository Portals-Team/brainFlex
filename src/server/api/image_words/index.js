const prisma = require("../../prisma");
const router = require("express").Router();
module.exports = router;
 
 // GET /api/image_words/:id
 router.get("/:id", async (req, res, next) => {
    try {
      if(!res.locals.user) {
        return next({
            status: 400,
            message: "You are not logged into the correct account"
        });
      }
      const id = +req.params.id;
      const imageWord = await prisma.image_word.findUnique({ where: { id } });
      res.json(imageWord);
    } catch {
      next();
    }
  });