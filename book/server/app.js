const express = require("express");
const morgan = require("morgan");
const bookRouter = require("./routes/bookRoutes");

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

module.exports = app;
