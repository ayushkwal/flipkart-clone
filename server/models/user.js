const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase:true,
        required:true

    },
    firstName: {
        type: String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    address:{
        type:String
    },
    password:{
        type:String,
        required:(true,'Enter Password'),
        minLength:8
    }
})

const User = mongoose.model("user", userSchema);
module.exports = User;