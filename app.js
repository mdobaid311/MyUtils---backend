require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// Extra security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

const connectDB = require("./db/connect");
const authenticateUser = require("./middleware/authentication");

const authRouter = require("./routes/auth");
const todosRouter = require("./routes/todos");
const codexRouter = require("./routes/codex");
const notesRouter = require("./routes/notes");
const PDFtoWordRouter = require("./routes/PDFToWord");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  })
);
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());
// extra packages

app.get("/", (req, res) => {
  res.send("My Utils API");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/todos", todosRouter);
app.use("/api/v1/notes", notesRouter);
app.use("/api/v1/codex", codexRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
