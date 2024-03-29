const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    id:String,
    url: String, 
    detailUrl: String,
    title: Object, 
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String 
})

const Product = mongoose.model('product',productSchema)
module.exports = Product