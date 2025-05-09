import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandlers.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import path from "path";

const SECRET_KEY = "bgtery";
// salt is random

// const createUser = asyncHandler(async (req, res) => {
//   const { username, email, password } = req.body;

//   if (!username || !email || !password) {
//     throw new Error("Please fill all the inputs.");
//   }

//   const userExists = await User.findOne({ email });
//   if (userExists) {
//     res.status(400).send("User already exists");
//   }

//   // hashing password using bcrypt
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);

//   // create user
//   const newUser = new User({ username, email, password: hashedPassword });

//   try {
//     await newUser.save();
//     createToken(res, newUser._id);
//     res.status(201).json({
//       _id: newUser._id,
//       username: newUser.username,
//       email: newUser.email,
//       isAdmin: newUser.isAdmin,
//     });
//   } catch (error) {
//     res.status(400);
//     throw new Error("Invalid Credentials");
//   }
// });

const registerUser = async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });
    const result = await user.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const uploadFile = (req, res) => {
  res.status(200).json({ filePath: req.file.path });
};

// export { createUser };
export { registerUser };
export { loginUser };
export { uploadFile };
