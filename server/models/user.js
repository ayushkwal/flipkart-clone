const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase:true,
        validate:[isEmail,'please enter valid email address'],
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

//Hash password with bcrypt
userSchema.pre('save',async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.statics.login = async function(email,password){
    const user = await this.findOne({email});
    if(user)
    {
      const auth =   await bcrypt.compare(password,user.password);
        if(auth)
        {
            return ({data:user});
        }
        return ({error:'Incorrect Password'})
    }
    return  ({error:'Incorrect Email'})
}


const User = mongoose.model("user", userSchema);
module.exports = User;