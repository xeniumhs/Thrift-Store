import express from "express"; // Import express using ES module syntax
import User from "../db/User.js"; 

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    if (req.body.email && req.body.password) {
      let user = await User.findOne(req.body).select("-password");
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
