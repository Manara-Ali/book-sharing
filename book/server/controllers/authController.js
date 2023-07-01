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


exports.login = catchAsyncFn(async (req, res, next) => {
    // 1. Retrieve email && password
    const { email, password } = req.body;
  
    if (!email || !password) {
      const applicationError = new ApplicationError(
        "Email and password are required to log in",
        400
      );
  
      next(applicationError);
    }
  
    // 2. Compare email and password to one in db
    const user = await User.findOne({ email }).select("+password");
  
    if (!user || !(await user.comparePassword(password, user.password))) {
      const applicationError = new ApplicationError(
        "Invalid email or password. Try again",
        401
      );
  
      next(applicationError);
  
      return;
    }
  
    createAndSendToken(user, 200, res);
});

exports.logout = (req, res, next) => {
    res.cookie("jwt", "", {
      expires: new Date(Date.now() - 10000),
      httpOnly: true,
    });
  
    res.status(200).json({
      status: "success",
    });
};