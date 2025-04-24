const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./db/config");

const userRoute = require("./routes/usersapi");
const User = require("./db/User");

app.use(express.json());
app.use(cors());

app.use(userRoute); // this will include all the routes from usersapi.js

app.post("/login", async (req, resp) => {
  if (req.body.email && req.body.password) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      resp.send(user);
    } else {
      resp.send("user not found");
    }
  }
  else{
    resp.send("error");
  }
});

app.get("/", async (req, res) =>{
  const product = await product.find();
} )

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server running on http://localhost:${port}");
});
