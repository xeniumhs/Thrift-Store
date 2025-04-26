const express = require('express');
const router = express.Router();
//database connection
const User = require('../db/User');
//image testing
const path = require('path');
const multer = require('multer');

//other imports
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const SECRET_KEY = 'bgtery';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Appending extension
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000 // 1 MB
    }, 
});

router.post('/upload', upload.single('file'), (req, res) => {
    res.status(200).json({ filePath: req.file.path });
})

router.post('/register', async (req, res) => {
    try {
        const user = new User({
            username : req.body.username,
            email: req.body.email,
            password : await bcrypt.hash(req.body.password, 10),
        });
        let result = await user.save();
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

router.post('/login', async (req, res) => {
    try {
        if(req.body.email && req.body.password) {
            const user = await User.findOne({ email: req.body.email });
            if(!user){
                return res.status(400).json({message : 'User not found'});
            }
            else{
                if(await bcrypt.compare(req.body.password, user.password)){
                    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });
                    res.send(user);
                }
                else{
                    res.send('Wrong password');
                }
            }
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;