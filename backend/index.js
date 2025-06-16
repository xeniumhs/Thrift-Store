// packages
import path from 'path';
import express from 'express';
import cors from 'cors'; // Use import for consistency
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();


// utils
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js"

connectDB();

// import bodyparser from 'body-parser';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors());

app.use("/api/users",userRoutes); // this will include all the routes from usersapi.js
app.use("/api", productRoutes);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
app.get("/", (req, res) => {
  res.send("Hello from Express server!");
});