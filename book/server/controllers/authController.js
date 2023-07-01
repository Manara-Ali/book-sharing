const User = require("../models/userModel");
const catchAsyncFn = require("../utils/catchAsyncFn");
const ApplicationError = require("../utils/applicationError");
const jwt = require("jsonwebtoken");
const createAndSendToken = require("../utils/createAndSendToken");

exports.signup = catchAsyncFn(async (req, res, next) => {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });
  
    createAndSendToken(user, 201, res);
  });