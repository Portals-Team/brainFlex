const prisma = require("../prisma");
const router = require("express").Router();
module.exports = router;
 
 //get image_word
 router.get("/:id", async (req, res, next) => {
    try {
      const id = +req.params.id;
      const imageWord = await prisma.Image_word.findUnique({ where: { id } });
      res.json(imageWord);
    } catch {
      next();
    }
  });