const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user_id:String,
    cart:Object,
    status:{
        type:String,
        default:"pending"
    },
    order_date:{
        type:String,
        default:Date.now()
    }
    
})

const Order = mongoose.model('order',orderSchema)
module.exports = Order