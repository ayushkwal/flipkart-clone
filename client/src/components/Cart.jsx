import React, { useEffect, useState } from "react";
import '../css/Cart.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import Dialog from '@mui/material/Dialog';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart,removeFromCartAllProduct } from "../actions/index";
import Axios from 'axios'
import userContext from '../context/userContext';
import { useNavigate } from "react-router-dom";

const Cart = () => {

    const navigate = useNavigate();
    //getting value of userStatus whether User is Logged in or not
    const a = useContext(userContext);
    console.log(a, 'is user status')


    const dispatch = useDispatch();
    var orders = useSelector((state) => state.AddProductToCartReducer);
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [productid, setProductid] = useState('');
    const [open, setOpen] = useState(false);
    const [removecondition, setRemovecondition] = useState(false);
    const [savedOrder,setSavedOrder] = useState('')
    useEffect(() => {
        var priceNow = 0, discountNow = 0;
        orders.map((order) => {
            console.log(order)
            priceNow += order.price.mrp;
            discountNow += order.price.mrp - order.price.cost;
        })
        console.log(priceNow, discountNow)
        setPrice(priceNow);
        setDiscount(discountNow);
    }, [orders])


    const removeproduct = () => {

        dispatch(removeFromCart({id:productid,userid:a.userStatus.userId}));
        setOpen(false)

    }
    const handleClose = () => {
        setOpen(false)
    }

    const placeMyOrder = async (mrp) => {

        if(!a.userStatus.status){
           return alert('For placing your order, you need to first Log In')
        }
        const API_URL = `http://localhost:5000/`
        const orderUrl = `${API_URL}order/${mrp}`;
        const response = await Axios.get(orderUrl);
        const { data } = response;
        console.log("App -> razorPayPaymentHandler -> data", data)
        console.log("response", response)

        const options = {
            key: 'rzp_test_oj6JRa6Lzk7GO2',
            name: "Flipkart",
            description: "We are feeling lucky to have a customer like you.",
            order_id: data.id,
            handler: async (response) => {
                try {
                    const paymentId = response.razorpay_payment_id;
                    const url = `${API_URL}capture/${paymentId}`;
                    const captureResponse = await Axios.post(url, { mrp: mrp })
                    const successObj = JSON.parse(captureResponse.data)
                    const captured = successObj.captured;
                    console.log("App -> razorPayPaymentHandler -> captured", successObj)
                    if (captured) {
                        console.log('success')
                       await fetch('/orderplace',{
                            method:'post',
                            headers:{
                                'content-type':'application/json'
                            },
                            body:JSON.stringify({
                                id:a.userStatus.userId 
                            })
                        }).then((res)=>{
                            return res.json();
                        }).then((data)=>{
                            setSavedOrder(data.id)
                            console.log(data)
                        })
                        dispatch(removeFromCartAllProduct({userid:a.userStatus.userId})).then(()=>{
                            navigate('/Thankyou', {
                                state: {
                                  userId: savedOrder,
                                }
                              })
                        }).catch(err=>{
                            console.log(err)
                        })


                    }

                } catch (err) {
                    console.log(err);
                }
            },
            theme: {
                color: "#686CFD",
            },
        };
        const rzp1 = new window.Razorpay(options);
        // rzp1.createPayment(options);
        rzp1.open();

    }

    return (
        orders.length == 0 ?
            <>

                <Dialog
                    open={open} onClose={handleClose}> 
                    <div style={{ width: "380px", height: "190px", borderRadius: "12px", padding: "10px 15px" }}>
                        <p style={{ fontWeight: "600", height: "40px" }}>Remove Item</p>
                        <p style={{ color: 'gray' }}>Are you sure you want to remove this item?</p>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <button onClick={() => setOpen(false)} style={{ padding: "10px 30px", outline: "none" }}>CANCEL</button>
                            <button onClick={() => removeproduct()} style={{ padding: "10px 30px", color: "white", backgroundColor: "#2874f0", outline: "none", border: "none" }}>REMOVE</button>
                        </div>
                    </div>
                </Dialog>

                <div id="cartboxouter" style={{ backgroundColor: "#fff" }}>
                    <h4 id="mycart" style={{ textAlign: "left !important" }}>My cart</h4>
                    <div id="cartbox">
                        <img src="https://rukminim2.flixcart.com/www/300/300/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"></img>
                        {a.userStatus == 'false' ? <>
                            <h4>Your cart is empty!</h4>
                            <p>Add items to it now.</p>
                            <Link to="/" id="linkforshop">Shop Now</Link>
                        </>
                            :
                            <>
                                <h4>Missing Cart Items?</h4>
                                <p>Login to see the items you added previously</p>
                                <Link to="/" id="linkforshop">Home</Link>
                            </>
                        }
                    </div>
                </div>
            </>
            :
            <>
                <Dialog
                    open={open} onClose={handleClose}>
                    <div style={{ width: "380px", height: "190px", borderRadius: "12px", padding: "10px 15px" }}>
                        <p style={{ fontWeight: "600", height: "40px" }}>Remove Item</p>
                        <p style={{ color: 'gray' }}>Are you sure you want to remove this item?</p>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                            <button onClick={() => setOpen(false)} style={{ padding: "10px 30px", outline: "none" }}>CANCEL</button>
                            <button onClick={() => removeproduct()} style={{ padding: "10px 30px", color: "white", backgroundColor: "#2874f0", outline: "none", border: "none" }}>REMOVE</button>
                        </div>
                    </div>
                </Dialog>
                <div id="orderboxouter">
                    <div id="orderbox">
                        <h4>My Cart ({orders.length})</h4>
                        <hr />
                        {
                            orders.map((order) => {
                                return (
                                    <>
                                        <div style={{ display: "flex", flexDirection: "row", padding: "15px 50px" }}>
                                            <img src={order.url} width="20%" height="160px"></img>
                                            <div style={{ width: "60%" }}>
                                                <p style={{ fontSize: "15px", height: "0px" }}>{order.title.longTitle.substr(0, 50)}..</p>
                                                <p style={{ color: "gray", fontSize: "12px" }}>{order.title.shortTitle}</p>
                                                <p style={{ color: 'gray', fontSize: "14px", height: "9px" }}>Seller:RetailNet <img src={"https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"} width="38px"></img></p>
                                                <p><strong>₹{order.price.cost}</strong> &nbsp; <del style={{ color: 'gray' }}>{order.price.mrp}</del> &nbsp; <span style={{ color: "green" }}>{order.discount}</span></p>
                                                <span><button id="savebtn">SAVE FOR LATER</button><button onClick={() => { setProductid(order.id); setOpen(true) }} id="rmvbtn">REMOVE</button></span>
                                            </div>
                                            <div style={{ width: "35%" }}>
                                                <p style={{ fontSize: "13px" }}>Delivery by Sun Feb 27 | <span style={{ color: "green" }}>Free</span><del>₹40</del></p>
                                                <p style={{ fontSize: "10px", color: "gray" }}>7 Days Replacement Policy</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </>
                                )
                            })
                        }
                        {/* <hr/> */}
                        {/* <button onClick={()=>placeMyOrder(price - discount + 40)} style={{ float: 'right', backgroundColor: "#fb641b", padding: "17px 55px", outline: "none", border: "none", color: "white" }}>PLACE ORDER</button> */}
                        <button onClick={(e) => placeMyOrder(price - discount + 40)} style={{ float: 'right', backgroundColor: "#fb641b", padding: "17px 55px", outline: "none", border: "none", color: "white" }}>PLACE ORDER</button>
                    </div>
                    <div id="paymentbox">
                        <h3>PRICE DETAILS</h3>
                        <hr />
                        <div id="pricechart">
                            <div id="pricechartdiv" ><span>Price ({orders.length} items)</span> <span> ₹{price}</span></div>
                            <div id="pricechartdiv"><span>Discount</span> <span style={{ color: "#388e3c" }}>-₹{discount}</span></div>
                            <div id="pricechartdiv"><span>Buy more & save more</span> <span>-₹58</span></div>
                            <div id="pricechartdiv"><span>Coupons for you</span> <span>-₹40</span></div>
                            <div id="pricechartdiv"><span>Deliver Charges</span> <span><del>₹40</del><span style={{ color: "green" }}>Free</span></span></div>
                            <div id="pricechartdivTotal"><span>Total Amount</span> <span>₹{price - discount + 40}</span></div>
                            <p style={{ color: "#388e3c", fontSize: "13px", fontWeight: "700" }}>You will save ₹{discount} with this order</p>
                            <hr />
                        </div>
                    </div>
                   
                </div>
       
            </>
    )
}
export default Cart;