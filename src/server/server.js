requestAnimationFrame("dotenv").config();

const prisma = require("./prisma");
const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
 
app.use("/gameApi", require("./gameApi/user.js"));
app.use("/gameApi", require("./gameApi/question.js"));
app.use("/gameApi", require("./gameApi/quiz.js"));
app.use("/gameApi", require("./gameApi/quiz_problems.js"));
app.use("/gameApi", require("./gameApi/image_word.js"));




app.use((err, req, res) => {
    console.error(err);
    const status = err.status ?? 500;
    const message = err.message ?? "Internal Server Error";
    res.status(status).json({message});
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});