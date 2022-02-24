import React, { useEffect, useState } from "react";
import '../css/Cart.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../actions";
const Cart = () => {

    const dispatch = useDispatch();
    var orders = useSelector((state) => state.AddProductToCartReducer);
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
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

    const removeproduct = (id) => {
        console.log('Wanna remove product:', id)
        console.log(orders);
        dispatch(removeFromCart(id));
        console.log(orders);

    }


    return (
        orders.length == 0 ?
            <>
                <div id="cartboxouter" style={{ backgroundColor: "#f1f3f6" }}>
                    <h4 id="mycart" style={{ textAlign: "left !important" }}>My cart</h4>
                    <div id="cartbox">
                        <img src="https://rukminim2.flixcart.com/www/300/300/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"></img>
                        <h2>Your cart is empty!</h2>
                        <p>Add items to it now.</p>
                        <Link to="/" id="linkforshop">Shop Now</Link>
                    </div>
                </div>
            </>
            :
            <>
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
                                                <span><button id="savebtn">SAVE FOR LATER</button><button onClick={() => removeproduct(order.id)} id="rmvbtn">REMOVE</button></span>
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
                        <button style={{ float: 'right', backgroundColor: "#fb641b", padding: "17px 55px", outline: "none", border: "none", color: "white" }}>PLACE ORDER</button>
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