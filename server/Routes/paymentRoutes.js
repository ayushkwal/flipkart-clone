const router = require('express').Router();
const Razorpay = require("razorpay");
const request = require('request');

const razorInstance = new Razorpay({
    key_id : 'rzp_test_oj6JRa6Lzk7GO2',
    key_secret : 'hZzMBiyUhqpuDFMzBF7wDgPf'
  })

router.get('/order',(req,res)=>{
    try {
        const options ={
            amount : 10000000,
            currency : "INR",
            receipt: 'fds',
            payment_capture: 1000000, //1
      
          };
          razorInstance.orders.create(options,async function(err,order){
            if(err){
             res.status(500).json({
                message: "Something error!s"
              })
            }
            else res.status(200).json(order);
          });
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
});
router.post('/capture/:paymentId',(req,res)=>{
    
    try {
        return request(
            {
              method : "POST",
              url : `https://${razorInstance.KEY_ID}:${razorInstance.KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
              form:{
                amount : 1000000,
                currency: "INR"
              },
            },
            async function(err,response,body){
              if(err){
                res.status(500).json({
                  message: "Something error!s"
                })
              }
              else res.status(200).json(body)
            }
          )
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Something went wrong!"});
    }
});


module.exports = router