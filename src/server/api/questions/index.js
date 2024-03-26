const prisma = require("../../prisma");
const router = require("express").Router();
module.exports = router;

// GET /api/questions/:id
router.get("/:id", async (req, res, next) => {
    const {id} = req.params;
    try {
        if(!res.locals.user) {
            return next({
                status: 400,
                message: "You are not logged into the correct account"
            });
          }
        
        const question = await prisma.question.findUnique({where: {id: +id}});
        if(!question) {
            return next({
                status: 400,
                message: `No question with id ${id} exists`
            });
        }
        res.json(question);
    } catch (e) {
        next(e);
    }
});