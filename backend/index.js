const express = require("express");
const cors = require("cors");
const app = express();

require("./db/config");
const User = require("./db/User");
// const Product = require("./db/Product");

app.use(express.json());
app.use(cors());

app.post("/register",async (req,resp)=>{  
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
})



// app.get("/", async (req, res) => {
//   await connectDB();
//   const data = await Product.find();
//   res.send(data); // send JSON to browser
// });

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
