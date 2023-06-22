const express = require("express");
const morgan = require("morgan");
const bookRouter = require("./routes/bookRoutes");

const app = express();

app.use("/api/v1/books", bookRouter);

module.exports = app;
