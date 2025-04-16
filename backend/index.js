const express = require("express");
const mongoose = require("mongoose");
const app = express();

const cors = require("cors");
app.use(cors());

// Connect to MongoDB
const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/E-comm");
};

const productSchema = new mongoose.Schema({}, { strict: false });
const Product = mongoose.model("product", productSchema);

// Route
app.get("/", async (req, res) => {
  await connectDB();
  const data = await Product.find();
  res.send(data); // send JSON to browser
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
