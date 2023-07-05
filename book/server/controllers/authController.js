const util = require("util");
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

// Create a middleware to determine if the user is loggedin
exports.isLoggedIn = catchAsyncFn(async (req, res, next) => {
    if (req.cookies.jwt) {
      console.log("REQUEST.COOKIES.JWT");
      const decodedPayload = await util.promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET_KEY
      );
  
      const currentUser = await User.findById(decodedPayload.id).select(
        "+password +passwordChangedAt +role"
      );
  
      if (!currentUser) {
        next();
        return;
      }
  
      // 6. Verify that the password was not recently changed
      if (currentUser.wasPasswordChanged(decodedPayload.iat)) {
        next();
        return;
      }
  
      // 7. Attach user to request object
      currentUser.password = undefined;
      currentUser.role = undefined;
  
      res.loggedInUser = currentUser;
  
      console.log("HERE", res.loggedInUser);
  
      next();
  
      return;
    }
  
    // res.loggedInUser = null;
    res.loggedInUser = {};
  
    console.log("THERE", res.loggedInUser);
  
    next();
});

// Create a function to protect given routes
exports.protect = catchAsyncFn(async (req, res, next) => {
    let token;
  
    // 1. Retrieve token from request headers
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }
  
    if (!token) {
      const applicationError = new ApplicationError(
        "You are not logged in. Please log in and try again",
        401
      );
  
      next(applicationError);
  
      return;
    }
  
    // 2. Find the user associated with the token
    const decodedPayload = await util.promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET_KEY
    );
  
    // 3. Verifty that user still exist
    const user = await User.findById(decodedPayload.id).select(
      "+password +passwordChangedAt +role"
    );
  
    if (!user) {
      const applicationError = new ApplicationError(
        "This user is no longer a part of our community. Please log back in.",
        401
      );
  
      next(applicationError);
    }
  
    // 4. JWT ERROR
    // 5. TOKEN EXPIRED ERROR
  
    // 6. Verify that the password was not recently changed
    if (user.wasPasswordChanged(decodedPayload.iat)) {
      const applicationError = new ApplicationError(
        "Your password was recently changed. Please log back in with new password and try again.",
        401
      );
  
      next(applicationError);
  
      return;
    }
  
    // 7. Attach user to request object
    req.user = user;
  
    next();
});

exports.restrictTo = (...args) => {
    return (req, res, next) => {
      if (!args.includes(req.user.role)) {
        const applicationError = new ApplicationError(
          "You do not have permission to access this resource.",
          403
        );
  
        next(applicationError);
  
        return;
      }
  
      next();
    };
};