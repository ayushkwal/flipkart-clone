const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./Routes/authRoutes")
const paymentRoutes = require("./Routes/paymentRoutes")
const productRoutes = require("./Routes/productRoutes")
const cors = require('cors');
var cookies = require("cookie-parser");

app.use(cookies());

//Body parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


dotenv.config();
app.set('view engine', 'ejs')

//To activate cors
app.use(cors());

//to handle all login/logout routes
app.use('/', authRoutes);
//to handle payment from razorpay
app.use('/',paymentRoutes);
//to handle products
app.use('/',productRoutes)




//Mongo Database Connection 
mongoose.connect(`mongodb+srv://${process.env.mongoUser}:${process.env.mongoDB}@cluster0.jawu5.mongodb.net/Flipkart?retryWrites=true&w=majority`).then(() => {
    console.log("Connected to Database");
})

//Listening app
app.listen(5000, () => {
    console.log("Connected")
});
