import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { GetProductDetailsReducer } from '../reducers/GetProductDetailsReducer'
import { getProductDetails as productinfo } from "../actions/index.js";
import { useParams } from "react-router-dom";
import ImageView from './ImageView';
import DetailView from './DetailView'


const Product = () => {


    const product = useSelector((state) => state.GetProductDetailsReducer);
    const dispatch = useDispatch();
    const { id } = useParams();
    console.log('sending...')
    useEffect(() => {
        dispatch(productinfo(id))
    }, [dispatch])

    const propage = {
        display: "flex",
        flexDirection: "row"
    }

    return (
        <>
        {Object.keys(product).length === 0
        ?
            <div>Loading...</div>
        :
            <div style={propage}>
                <div style={{ width: "40%" }}>
                    <ImageView productDet={product} />
                </div>
                <div style={{ width: "60%" }}>
                    <DetailView productDet={product} />
                </div>
            </div>}
        </>

    )
}
export default Product