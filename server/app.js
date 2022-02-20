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


app.get('/home',(req,res)=>res.render('abc.ejs'))



//Mongo Database Connection 
mongoose.connect(`mongodb+srv://${process.env.mongoUser}:${process.env.mongoDB}@cluster0.jawu5.mongodb.net/Flipkart?retryWrites=true&w=majority`).then(()=>{
    console.log("Connected to Database");
   
})


app.listen(5000,()=>{
    console.log("Connected")
});
