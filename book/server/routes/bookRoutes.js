const express = require("express");
const bookController = require("../controllers/bookController");
const authController = require("../controllers/authController");

const router = express.Router();

router.use(authController.isLoggedIn);

router
  .route("/")
  .get(bookController.getAllBooks)
  .post(
    authController.protect,
    authController.restrictTo("user", "admin", "moderator"),
    bookController.uploadBookImages,
    bookController.processBookImages,
    bookController.createBook,
  );


router
  .route("/:id")
  .get(bookController.getBook)

module.exports = router;
