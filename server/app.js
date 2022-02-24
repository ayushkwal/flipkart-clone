const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const productdata = require("./constants/products.js")
const Product = require("./models/product.js");
const authRoutes = require("./Routes/authRoutes") 
const cors = require('cors')

//Body parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


dotenv.config();
app.set('view engine','ejs')

//To activate cors
app.use(cors());

//to handle all login/logout routes
app.use('/',authRoutes);

//To fetch Products
app.post('/products',async(req,res)=>{
    const products = await Product.find({});
    console.log(products);
    return res.json(products)

})
app.get('/products',async(req,res)=>{
    const products = await Product.find({});
    console.log(products);
    return res.json(products)
})
app.get('/productinfo/:id',async(req,res)=>{
    const product = await Product.findOne({id:req.params.id});
    console.log(product,'is your product complete detail');
    return res.json(product)
})



//Mongo Database Connection 
mongoose.connect(`mongodb+srv://${process.env.mongoUser}:${process.env.mongoDB}@cluster0.jawu5.mongodb.net/Flipkart?retryWrites=true&w=majority`).then(()=>{
    console.log("Connected to Database");
   
})


app.listen(5000,()=>{
    console.log("Connected")
});
