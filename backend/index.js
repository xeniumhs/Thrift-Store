// packages
import path from 'path';
import express from 'express';
import multer from "multer";
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// utils
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartitemRoutes from "./routes/cartitemRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

// Connect to DB
connectDB();

// initialize express
const app = express();

// ✅ Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ✅ Static folder for uploaded images
app.use("/uploadimage", express.static(path.join(__dirname, "uploadimage")));

// ✅ Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes); // renamed back to /api/products for clarity
app.use("/api/cart", cartitemRoutes);
app.use("/api/orders", orderRoutes);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("Hello from Express server!");
});

// ✅ Start server
const port = process.env.PORT ;
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
