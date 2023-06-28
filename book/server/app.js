const express = require("express");
const morgan = require("morgan");
const bookRouter = require("./routes/bookRoutes");
const errorController = require("./controllers/errorController");
const ApplicationError = require("./utils/applicationError");

const app = express();

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
