const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
  path: `${__dirname}/config.env`,
});

const app = require("./app");

const db = mongoose
  .connect(
    process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD)
  )
  .then((con) => {
    console.log("DATABASE CONNECTION SUCCESSFUL!");
  });

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server started on port ${port}...`);
});
