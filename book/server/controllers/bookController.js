const Book = require("../models/bookModel");

exports.getAllBooks = async (req, res, next) => {
  // Return document by awaiting query
  const books = await Book.find();

  res.status(200).json({
    status: "success",
    results: books.length,
    data: {
      books,
    },
  });
};
