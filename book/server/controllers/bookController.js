const Book = require("../models/bookModel");
const catchAsyncFn = require("../utils/catchAsyncFn");

exports.getAllBooks = catchAsyncFn(async (req, res, next) => {
  // Return document by awaiting query
  const books = await Book.find();

  res.status(200).json({
    status: "success",
    results: books.length,
    data: {
      books,
    },
  });
});

exports.createBook = catchAsyncFn(async (req, res, next) => {
  // Create new book
  const book = await Book.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      book,
    },
  });
});


exports.getBook = catchAsyncFn(async (req, res, next) => {
  const book = await Book.findById(req.params.id);

  if (!book) {
    // Create an instance of an application error
    const applicationError = new ApplicationError(
      `Invalid ID: ${req.params.id} is not a valid ID. Try again.`,
      404
    );

    next(applicationError);

    return;
  }

  res.status(200).json({
    status: "success",
    data: {
      book,
    },
  });
});