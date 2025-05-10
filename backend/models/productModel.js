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

    ratings: {
      average: {
        type: Number,
        default: 0,
        min: 0,
        max: 5,
      },
      count: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt automatically
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
