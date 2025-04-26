const mongoose = require("mongoose");
require('dotenv').config()
const mongoURI = process.env.DB_URI

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB✅");
  } catch (error) {
    console.log("Error connecting to MongoDB:❌ ", error);
    process.exit(1);
  }
};

// Call the connectDB function
connectDB();

module.exports = mongoose;
