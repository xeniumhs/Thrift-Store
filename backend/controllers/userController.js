import User from "../models/userModel.js";
import asyncHandler from "../middlewares/asyncHandlers.js";
import bcrypt from "bcrypt";

// salt is random  

const createUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    throw new Error("Please fill all the inputs.");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).send("User already exists");
  }

    // hashing password using bcrypt
    const salt = await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)
    
  // create user
  const newUser = new User({ username, email, password:hashedPassword });

  try {
      await newUser.save();
      createToken(res, newUser._id);
    res.status(201).json({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
      });
  } catch (error) {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

export { createUser };
