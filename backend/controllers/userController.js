const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//REGISTER NEW USER --- POST : api/users
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  //CHECK IF USER EXITS

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }

  // HASH PASSWORD

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//AUTHENTICATE A USER --- POST : /api/users/login
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login User" });
});

//GET USER DATA --- GET : api/users/me
const getME = asyncHandler(async (req, res) => {
  res.json({ message: "User data display" });
});

module.exports = { registerUser, loginUser, getME };
