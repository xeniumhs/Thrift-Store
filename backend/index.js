// packages
import express from 'express';
import cors from 'cors'; // Use import for consistency
import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";


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

app.use("/api/users",userRoutes); // this will include all the routes from usersapi.js


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

app.get("/api/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Fetch all products with mapped id
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    // Map _id to id for consistency
    const mappedProducts = products.map(product => ({
      ...product.toObject(),
      id: product._id.toString(),
    }));
    res.json(mappedProducts);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Delete a product by ID with enhanced error handling
app.delete("/api/products/:id", async (req, res) => {
  try {
    // 1. Verify MongoDB connection first
    if (mongoose.connection.readyState !== 1) {
      throw new Error("MongoDB not connected");
    }

    const { id } = req.params;

    // 2. Validate ID format with better error message
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        error: "Invalid ID format",
        expectedFormat: "24-character hex string",
        example: "507f1f77bcf86cd799439011",
        received: id,
      });
    }

    // 3. Debug logging before operation
    console.log(`Attempting to delete document with id: ${id}`);
    console.log("Current MongoDB readyState:", mongoose.connection.readyState);

    // 4. Perform deletion with timeout
    const result = await Product.findByIdAndDelete(id)
      .maxTimeMS(5000) // 5 second timeout
      .exec();

    // 5. Handle result
    if (!result) {
      console.log(`Document ${id} not found`);
      return res.status(404).json({
        error: "Document not found",
        suggestion: "Check if the ID exists in the database",
      });
    }

    // 6. Success
    console.log(`Successfully deleted document ${id}`);
    return res.status(204).end();
  } catch (err) {
    // 7. Enhanced error diagnostics
    console.error("DELETE Operation Failed:", {
      error: err.message,
      stack: err.stack,
      timestamp: new Date().toISOString(),
      mongooseState: mongoose.connection.readyState,
      params: req.params,
    });

    // 8. Better error response
    return res.status(500).json({
      error: "Delete operation failed",
      requestId: req.id,
      systemMessage:
        process.env.NODE_ENV === "development" ? err.message : undefined,
      action: "Check server logs for detailed error information",
    });
  }
});


const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
