import React from "react";
import '../css/ImageView.css'
import {addToCart} from '../actions/index';
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
const ImageView = ({ productDet }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const item = useSelector((state) => state.AddProductToCartReducer);

    const addcart = async()=>{
        console.log(productDet.id)
        dispatch(addToCart(productDet.id));  
        navigate('/cart');
    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: "60px" }}>
                <img src={productDet.detailUrl} />
                <div id="btndiv">
                    <button id="addcartbtn" onClick={()=>addcart()}>
                        <svg class="_1KOMV2" width="16" height="16" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path class="" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>

                      &nbsp;  ADD TO CART</button>
                    <button id="buynowbtn">
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMHY3LjdoMi4xVjE0TDcgNS42SDQuMkw3IDAiIGZpbGw9IiNGRkYiLz48L3N2Zz4="></img>


                      &nbsp;  BUY NOW</button>
                </div>
            </div>
        </>
    )
}
export default ImageView