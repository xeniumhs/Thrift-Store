import express from 'express';
import cors from 'cors'; // Use import for consistency
import db from './db/config.js'; // Assuming db is a default export
import userRoute from './routes/usersapi.js';
import User from './db/User.js';
import Product from './db/Product.js';

const app = express();

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
  } else {
    resp.send("error");
  }
});

app.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).send("Error retrieving products");
  }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
