const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        // unique : true,
    },
    gender : {
        type : String,
        enum : ['male','female','other'],
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : String
})

module.exports = mongoose.model('User',userSchema);