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

exports.createBook = async (req, res, next) => {
  // Create new book
  const book = await Book.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      book,
    },
  });
};
