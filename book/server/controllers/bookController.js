exports.getAllBooks = (req, res, next) => {
  res.status(200).json({
    status: "success",
    results: "Number of books",
    data: {
      message: "book data",
    },
  });
};
