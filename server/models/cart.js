const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user_id:String,
    cart:Object
    
})

const Cart = mongoose.model('cart',cartSchema)
module.exports = Cart