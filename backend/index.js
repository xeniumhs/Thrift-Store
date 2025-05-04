<<<<<<< HEAD
const express = require("express");
// const mongoose = require("mongoose");
require("./db/config");
const app = express();

const User = require("./db/User");
const Product = require("./db/Product");

const cors = require("cors");
app.use(express.json());
app.use(cors());

// Connect to MongoDB
// const connectDB = async () => {
//   await mongoose.connect("mongodb://localhost:27017/E-comm");
// };

// const productSchema = new mongoose.Schema({}, { strict: false });
// const Product = mongoose.model("product", productSchema);

// Route
app.get("/", async (req, res) => {
  await connectDB();
  const data = await Product.find();
  res.send(data); // send JSON to browser
});

// Register route
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  await user.save();
  res.send("User registered successfully");
});

// Login route
app.post("/login", async (req, resp) => {
  console.log(req.body);
  if (req.body.password && req.body.email) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No user found" });
    }
  } 
  else {
    resp.send({ result: "error found"});
  }
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
=======
// packages
import express from 'express';
import cors from 'cors'; // Use import for consistency
import dotenv from 'dotenv';
dotenv.config();

import User from './models/userModel.js';
import Product from './models/productModel.js';

// utils
import connectDB from "./config/db.js"; 
import userRoutes from "./routes/userRoutes.js";

connectDB();

import bodyparser from 'body-parser';
const app = express();



app.use(express.json());
app.use(cors());

app.use(userRoutes); // this will include all the routes from usersapi.js


app.get('/',(req,res)=>{
  res.send('Hello from the backend server');
})

// app.get("/", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).send("Error retrieving products");
//   }
// });

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
>>>>>>> 54cc6a79c65d8ddf941b70e34b7fdc915f37305e
});
