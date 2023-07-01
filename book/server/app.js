const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bookRouter = require("./routes/bookRoutes");
const userRouter = require("./routes/userRoutes");
const errorController = require("./controllers/errorController");
const ApplicationError = require("./utils/applicationError");

const app = express();

app.use(cors({
  origin: "*",
}));

// Add body parser
app.use(
  express.json({
    limit: "10kb",
  })
);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/books", bookRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  //   const error = new Error(`Cannot find ${req.originalUrl} on our servers...`);
  const applicationError = new ApplicationError(
    `Cannot find ${req.originalUrl} on any of our servers...`,
    404
  );

  next(applicationError);
});

app.use(errorController.globalErrorHandler);

module.exports = app;
