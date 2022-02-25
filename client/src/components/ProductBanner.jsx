import React, { useEffect } from "react";
import {Link} from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import {products} from "../constants/products.js"
import { useSelector, useDispatch } from "react-redux";
import { getProducts as allpro } from "../actions/index.js";
const ProductBanner = () => {

  const products = useSelector((state) => state.GetProductReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allpro)
  }, [dispatch])



  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const productDetail = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
  return (
    <Carousel
      infinite={true}
      autoPlaySpeed={1000}
      autoPlay={true}
      responsive={responsive}
    >
      {
        products.map((p) => {
          return (
            <Link to={`/product/${p.id}`} style={{textDecoration:"none",color:"gray"}}>
            <div style={productDetail}>
              <img style={{ height: "120px", marginBottom: "30px" }} src={p.url}></img>
              <div >{p.title.shortTitle}</div>
              <div style={{ color: "green" }}>{p.discount}</div>
              <div >{p.tagline}</div>
            </div>
            </Link>
          )
        })
      }
    </Carousel>

  )

}

export default ProductBanner;