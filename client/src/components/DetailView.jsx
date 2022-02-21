import React from "react";
import '../css/DetailView.css'
const DetailView = ({ product }) => {

    return (
        <>
            <div id="det">
                <div id="title">
                    <div id="shortTitle">
                        {product.title.shortTitle}
                    </div>
                    <br />
                    <div id="longTitle">
                        {product.title.longTitle}
                    </div>
                </div>
                <div >
                    ₹{product.price.cost} 
                    {product.price.mrp}
                     {product.price.discount} 
                     Hurry, Only a few left!
                </div>
                <div>

                </div>
            </div>
        </>
    )
}
export default DetailView