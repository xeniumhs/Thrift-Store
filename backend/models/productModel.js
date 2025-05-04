import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    // name: String,
    // price: Number,
    // description: String,
    // category: String,
    // image: String,
    // quantity: Number,
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: String,
    category: { type: String, required: true },
    image: String,
    quantity: { type: Number, required: true },
  },
  
);

const Product = mongoose.model("Product", productSchema);

export default Product;
