const { ServerError } = require("../errors");
const prisma = require("../prisma");
const jwt = require("./auth/jwt");

const router = require("express").Router();
module.exports = router;

// Attaches user to res.locals if token is valid
router.use(async (req, res, next) => {
  // Check for token
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(" ")[1]; // "Bearer <token>"
  if (!authHeader || !token) {
    return next();
  }

  // Get user from token
  try {
    const { id } = jwt.verify(token);
    const user = await prisma.user.findUniqueOrThrow({ where: { id } });
    res.locals.user = user;
    next();
  } catch (err) {
    console.error(err);
    next(new ServerError(401, "Invalid token."));
  }
});

router.use("/auth", require("./auth"));
router.use("/topics", require("./topics"));
router.use("/categories", require("./categories"));
router.use("/user_topics", require("./user_topics"));
router.use("/users", require("./users"));
router.use("/questions", require("./questions"));
router.use("/quizes", require("./quizes"));
router.use("/quiz_problems", require("./quiz_problems"));
router.use("/image_words", require("./image_words"));
