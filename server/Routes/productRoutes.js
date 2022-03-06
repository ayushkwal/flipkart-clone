const mongoose = require("mongoose");
const Product = require("../models/product.js");
const Cart = require('../models/cart')
const Order = require("../models/order")
const cors = require('cors')


const router = require('express').Router();

router.post('/products',async(req,res)=>{
    const products = await Product.find({});
    // console.log(products);
    return res.json(products)
});
router.get('/productinfo/:id',async(req,res)=>{
    const product = await Product.findOne({ id: req.params.id });
    console.log(product, 'is your product complete detail');
    return res.json(product)

});
router.get('/products',async(req,res)=>{
    const products = await Product.find({});
    // console.log(products);
    return res.json(products)
});

router.post('/searchpro',async(req,res)=>{
    console.log(req.body)
    const stringer = await req.body.values
    console.log('stringer:',stringer);
    const Sproducts = await Product.find({"title.longTitle": {$regex : stringer}})
    console.log(Sproducts,'is searched items');
    return res.json(Sproducts);
})

router.post('/allorders',async(req,res)=>{
    if(req.body.id==''){
        return res.json([])
    }
    const order =await Order.find({user_id:req.body.id});
    console.log(order)
    return res.json(order);
    
})


router.post('/addproducttodb',async(req,res)=>{
    if(req.body.user_id!=''){
        const exist = await Cart.findOne({user_id:req.body.user_id});
        if(exist){
            await Cart.findOneAndUpdate(
                {user_id: req.body.user_id},
        { $set: { cart:[...exist.cart,req.body.cart]}}
            )
            return res.json(exist)
        }
        else{
            const addproducts = await Cart.create({user_id:req.body.user_id,cart:[req.body.cart]});
            console.log(addproducts,'idfsoiuf');
            return res.json(addproducts)
        }
    }
    return res.json({error:'Not Logged in'})
    
   
});
router.post('/removeproducttodb',async(req,res)=>{
    if(req.body.user_id!=''){
        const exist = await Cart.findOne({user_id:req.body.user_id});
        if(exist){
            console.log(exist)
            const newcart = exist.cart.filter((i)=>i!=req.body.cart)
            
            console.log(exist)
           const r =  await Cart.findOneAndUpdate(
                {user_id: req.body.user_id},
        { $set: { cart:newcart}}
            )
            console.log(r)
            return res.json(exist)
        }
    }
    console.log('not logged in');
    return res.json({error:'Not Logged in'})
});




router.post('/getAllItemFromCart',async(req,res)=>{
    const a = await Cart.findOne({user_id:req.body.id})
    return res.json(a);
});

router.post('/orderplace',async(req,res)=>{
    const itemsInsideCart = await Cart.findOne({user_id:req.body.id});
    console.log(itemsInsideCart,'is items inside cart');
    const p = await Order.create({user_id:req.body.id,cart:itemsInsideCart.cart,status:"pending"});
    const emptyCart = await Cart.findOneAndUpdate({user_id: req.body.id}, { $set: { cart:[]}})
    console.log(emptyCart,'is items inside cart');
    return res.json(p);
})

module.exports = router