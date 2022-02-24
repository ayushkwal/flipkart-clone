import React from "react";
import '../css/DetailView.css'
const DetailView = ({ productDet }) => {

    console.log(productDet)

    return (
        <>
        
            <div id="det">
                <div id="title">
                    <div id="shortTitle">
                        {productDet.title.shortTitle}
                    </div>
                    <div id="longTitle">
                        {productDet.title.longTitle}
                    </div>
                </div>
                <div style={{paddingTop:"12px"}}>
                  <span style={{fontSize:"25px",fontWeight:"600"}}>  ₹{productDet.price.cost} </span> 
                   <span style={{fontSize:"20px",padding:"2px 2px",color:"gray"}}> <del>{productDet.price.mrp}</del> </span>
                    <span style={{color:"green",padding:"2px 2px"}}> {productDet.price.discount} </span>     
                    <span style={{color:"red",fontSize:"13px",fontFamily:"600"}}>    Hurry, Only a few left! </span>
                </div>
                <div style={{color:"gray",fontSize:"13px",fontWeight:"bolder",paddingTop:"15px"}}>
                    <span id="rating">4.1  *</span> &nbsp;&nbsp; 30 ratings and 2 reviews &nbsp;&nbsp; <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png" width={"50px"}/>
                </div>
                <p style={{fontSize:"15px",fontWeight:"600"}}>Coupons for you</p>
                <span style={{margin:"auto"}}><img src="https://rukminim2.flixcart.com/www/25/25/promos/30/07/2019/79f48e86-8a93-46ab-b45a-5a12df491941.png?q=90" /><span style={{fontSize:"14px"}}>Special PriceGet extra 30% off upto ₹50 on 1 item(s)</span></span>
                <p style={{fontSize:"15px",fontWeight:"600"}}>Available offers</p>
                <span style={{margin:"auto"}}><img src="https://rukminim2.flixcart.com/www/25/25/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" /><span style={{fontSize:"14px"}}>Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹100*</span></span><br></br>
                <span style={{margin:"auto"}}><img src="https://rukminim2.flixcart.com/www/25/25/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" /><span style={{fontSize:"14px"}}>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card</span></span><br></br>
                <span style={{margin:"auto"}}><img src="https://rukminim2.flixcart.com/www/25/25/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" /><span style={{fontSize:"14px"}}>No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999</span></span>
           <p>Delivery by <strong>{new Date().getDate()}/{new Date().getMonth() + 1}</strong></p>
           <p style={{fontSize:"13px"}}>14 days Return Policy</p>
           <p style={{fontSize:"13px"}}>Cash on Delivery available</p>
           <img src="https://rukminim2.flixcart.com/lockin/400/240/images/CCO__PP_2019-07-14.png?q=50"></img>
           <div style={{display:"flex",flexDirection:"row"}}>
            <p style={{color:"gray",width:"15%"}}>Description &nbsp;</p>
           <p style={{color:"black",fontSize:"13px",width:"70%"}}>{productDet.description}</p>
           </div>
           <hr />
           <h2 style={{fontWeight:"500"}}>Product Details</h2>
            </div>
        </>
    )
}
export default DetailView