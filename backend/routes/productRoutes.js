// routes/productRoutes.js
import express from "express";
import {
  getAllProducts,
  deleteProductById,
  createProducts
} from "../controllers/productController.js";
import upload from "../middlewares/upload.js";

const router = express.Router();
router.post("/add", upload.array("image",5), createProducts);

router.get("/", getAllProducts);

router.delete("/:id", deleteProductById);

export default router;
