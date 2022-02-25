const mongoose = require("mongoose");
const Product = require("../models/product.js");
const cors = require('cors')


const router = require('express').Router();

router.post('/products',async(req,res)=>{
    const products = await Product.find({});
    console.log(products);
    return res.json(products)
});
router.get('/productinfo/:id',async(req,res)=>{
    const product = await Product.findOne({ id: req.params.id });
    console.log(product, 'is your product complete detail');
    return res.json(product)

});
router.get('/products',async(req,res)=>{
    const products = await Product.find({});
    console.log(products);
    return res.json(products)
});

module.exports = router