const prisma = require("../prisma");
const router = require("express").Router();
module.exports = router;

router.get("/user/:id", async (req, res, next) => {
    const {id} = req.params;
    try {
        const user = await prisma.user.findUnique({where: {id: +id}});
        if(!user) {
            return next({
                status: 400,
                message: `No user found with id ${id}`
            });
        }
        res.json(user);
    } catch (e) {
        next(e);
    }
});

router.patch("user/:id", async (req, res, next) => {
    const {id} = req.params;
    const {username, password, name, aggregate_score, quiz_count} = req.body;
    try{
        if(!res.locals.user) {
            return next({
                status: 400,
                message: "You are not logged into the correct account"
            });
        }
        
        const user = await prisma.user.findFirst({where: {id: +id}});

        if(!user) {
            return next({
                status: 400,
                message: `No user found with id ${id}`
            });
        }

        const updatedUser = await prisma.user.update({
            where: {id: +id},
            data: {
                username: username,
                password: username,
                name: name,
                aggregate_score: +aggregate_score + 1,
                quiz_count: +quiz_count
            }
        });
        
        if(!updatedUser) {
            return next({
                status: 401,
                message: "Update invalid, please try again"
            });
        }

        res.json(updatedUser);

    } catch (e) {
        next(e);
    }
});