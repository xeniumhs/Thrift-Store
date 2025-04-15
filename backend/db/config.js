const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/E-comm")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Failed:", err));
