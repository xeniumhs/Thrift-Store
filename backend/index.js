const express = require("express");
const cors = require("cors");
const bodyparser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyparser.json());

//server configuration
require('dotenv').config();

//database connection
require("./db.js");

//routes
const userRoute = require("./routes/usersapi");
app.use(userRoute); // this will include all the routes from usersapi.js


app.get('/',(req,res)=>{
  res.send('Hello from the backend server');
})

// app.get("/", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).send("Error retrieving products");
//   }
// });

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
