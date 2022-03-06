// import React from 'react';
// import {items } from '../constants/items'

// const Banner = ()=>{

//     return(
//         <>
//         <h1>Hello</h1>
//         {
//                 items.map((item)=>{
//                     return (
                        
//                         <img style={{width:"60px"}} src={item.url}></img>
                        
//                     )
//                 })
//             }
//         </>
//     )
// }

// export default Banner;














import React from "react";
import { bannerData } from "../constants/data";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  image: {
    width: "100%",
    height: 280,
  },
  carousel: {
    marginTop: "10",
  },
});
const Banner = () => {
  const classes = useStyles();
  return (
    <Carousel
      autoplay={true}
      animation="slide"
      indicators={false}
      navButtonsAlwaysVisible={true}
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          background: "#fff",
          color: "#494949",
          borderRadius: 0,
          margin: 0,
        },
      }}
      className={classes.carousel}
    >
      {bannerData.map((item,i) => (
        <img key={i} src={item} alt="" className={classes.image} />
      ))}
    </Carousel>
  );
};
export default Banner;










