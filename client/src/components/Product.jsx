import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetProductDetailsReducer } from '../reducers/GetProductDetailsReducer'
import { getProductDetails as productinfo } from "../actions/index.js";
import { useParams } from "react-router-dom";
import ImageView from './ImageView';
import DetailView from './DetailView'


const Product = (match) => {


    const product = useSelector((state) => state.GetProductDetailsReducer);
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(productinfo(id))
    }, [dispatch])

    const propage = {
        display: "flex",
        flexDirection: "row"
    }

    return (
        <>
            <div style={propage}>
                <div style={{ width: "40%",border:"1px solid green"  }}>
                    <ImageView />
                </div>
                <div style={{ width: "60%",border:"1px solid red" }}>
                <DetailView product={product}/>
                </div>
            </div>
        </>

    )
}
export default Product