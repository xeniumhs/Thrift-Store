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
});
