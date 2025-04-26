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

const bodyparser = require('body-parser');
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
});
