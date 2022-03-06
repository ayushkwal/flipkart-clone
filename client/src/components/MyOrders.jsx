import React from "react"
import { useState, useEffect } from "react";
import userContext from '../context/userContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";


const MyOrders = () => {
    //getting value of userStatus whether User is Logged in or not
    const a = useContext(userContext);
    // console.log(a, 'is user status')
    const navigate = useNavigate();

    // const [orders, setOrders] = useState([])
    // const [load, setLoad] = useState(false);

    // useEffect(() => async () => {
    //     const orderget = await fetch('/allorders', {
    //         method: 'post',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ id: a.userStatus.userId })
    //     })
    //     const orderin = await orderget.json();
    //     const orderwithdetails = await fetch('/getorderdetails', {
    //         method: 'post',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ pro: orderin[0].cart })
    //     })
    //     console.log(orderin, 'ddddddddddddd');
    //     setOrders(orderin)
    // }, [a])

    const style = {
        ele: {

        },
        orderheading: {
            color: 'red',

        },


        ayush: {
            // padding: "20px",
            width: "100%",
            // height: "100px",
            fontSize: "14px",
        },
        more: {
            display: "flex",
            justifyContent: "center",
            width: "14%",
            margin: "12px auto",
            color: "#2874f0",
            textAlign: "center",
            padding: "10px",
            backgroundColor: "#fff",
            border: "1px solid #d7d7d7",
            fontSize: "14px",
            borderRadius: "2px",
            textTransform: "capitalize",
            boxShadow: "none",
            fontWeight: "500",
            cursor: "pointer"
        },
        body: {
            backgroundColor: "#ff000009",
        },
        nav: {


            padding: "4px",
            height: "13px",
            width: "70%",
            border: "1px solid #dbdbdb",
            padding: "8px",
            borderRadius: "4px 0 0 4px",
            fontSize: "14px",
            marginTop: "70px",
            marginLeft: "10px",
        },
        search: {
            cursor: "pointer",
            margin: "13px 2px",
            padding: "9px 5px",
            height: "15px",
            background: "#2874f0",
            color: "#fff",
            boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%",
            border: " none"
        },
        first: {
            backgroundColor: "white",
            width:"45%",
            justifyContent:"space-around",
            
        },
        body1: {
            display:"flex",
            flexDirection:"row",
            backgroundColor: "white",
            justifyContent:"space-around",
            alignItems:"center"

        }

    }
    return (
        <>
            {/* <h1 style={style.orderheading}>My Orders</h1> */}

            <input style={style.nav} type="text" className="nav" placeholder="Search your orders here" value="" /><span style={style.search}>Search Orders</span>


            {/* <div style={style.body}>


                <input style={style.nav} type="text" class="nav" placeholder="Search your orders here" value="" /><span style={style.search}>Search Orders</span>


                <div style={style.body1}>
                    <div style={style.first}>
                        <h2 style={style.ayush}>Total Items: ( {} items )</h2>
                        <p style={style.seller}>Seller: SuperComNet</p>
                    </div>

                    <div style={{width:"20%"}}>
                        ₹1600
                    </div>
                    <div>
                        <h5>Delivered on Aug 23,2021</h5>
                        <h4>Your item has been delivered</h4>

                    </div>
                </div>


                <h3 style={style.more}>No More Results To Display</h3>

            </div> */}
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"60vh"}}>
            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_cd3e64.png"></img>
            <h3>No orders to display</h3>
            <p>Site Under Construction</p>
            <button onClick={()=>navigate('/')} style={{ backgroundColor: "#fb641b", padding: "17px 55px", outline: "none", border: "none", color: "white" }}>GO TO HOME</button>
            </div>
                  

            )

        </>
    )
}
export default MyOrders