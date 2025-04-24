const express = require('express');
const router = express.Router();
const User = require('../db/User');

router.post('/register', async (req, res) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        delete result.password;
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.post('/login', async (req, res) => {
    try {
        if(req.body.email && req.body.password) {
            let user = await User.findOne(req.body).select("-password");
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;