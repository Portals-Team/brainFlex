require("dotenv").config();
const prisma = require("./prisma");
const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
 
app.use("/gameApi", require("./api/user/index.js"));
app.use("/gameApi", require("./api/question/index.js"));
app.use("/gameApi", require("./api/quiz/index.js"));
app.use("/gameApi", require("./api/quiz_problems/index.js"));
app.use("/gameApi", require("./api/image_word/index.js"));




app.use((err, req, res, next) => {
    console.error(err);
    const status = err.status ?? 500;
    const message = err.message ?? "Internal Server Error";
    res.status(status).json({message});
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT} from HERE`);
});