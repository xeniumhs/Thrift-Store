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

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/users',userRoutes); // this will include all the routes from userRoutes.js

app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send("user not found");
    }
  } else {
    resp.send("error");
  }
});

app.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send("Error retrieving products");
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
