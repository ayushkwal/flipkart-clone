const router = require('express').Router();
const Razorpay = require("razorpay");
const request = require('request');

const razorInstance = new Razorpay({
    key_id : 'rzp_test_oj6JRa6Lzk7GO2',
    key_secret : 'hZzMBiyUhqpuDFMzBF7wDgPf'
  })

router.get('/order/:mrp',(req,res)=>{
    try {
        const options ={
            amount : req.params.mrp*100,
            currency : "INR",
            receipt: 'fds',
            payment_capture: 0, //1
      
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
              url : `https://${razorInstance.key_id}:${razorInstance.key_secret}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
              form:{
                amount : req.body.mrp*100,
                currency: "INR"
              },
            },
            async function(err,response,body){
              if(err){
                console.log('1');
                res.status(500).json({
                  message: "Something error!s"
                })
              }
              
              else {console.log('2');res.status(200).json(body)}
            }
          )
    } catch (error) {
        console.log(error);
        console.log('3');
        res.status(500).json({error:"Something went wrong!"});
    }
});


module.exports = router