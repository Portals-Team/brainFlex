const prisma = require("../prisma");
const router = require("express").Router();
module.exports = router;

router.get("/question/:id", async (req, res, next) => {
    const {id} = req.params;
    try {
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