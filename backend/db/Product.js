const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    quantity: Number,
});

module.exports = mongoose.model('Product', productSchema);