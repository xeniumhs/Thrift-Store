import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
    },
    gender : {
        type : String,
        enum : ['male','female','other'],
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : String
})

export default mongoose.model('User',userSchema);