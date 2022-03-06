import { maxWidth } from "@mui/system";
import React from "react";
import {items } from '../constants/items'

// console.log(items);

const NavItems = ()=>{

    const itemstack = {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        border:"5px solid #f2f2f2",
        
        '@media only screen and(maxWidth: 800px)': {
            justifyContent:"initial",
            overflowX:"scroll",
            flexDirection:"column",
          },
    }

    return(
        <div style={itemstack}>
            
            {
                items.map((item,i)=>{
                    return (
                        <div key={i} style={{display:"flex",flexDirection:"column"}}>
                        <img key={i+"a"} style={{width:"60px"}} src={item.url}></img>
                        <h5 key={i+"b"}>
                            {item.text}
                        </h5>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default NavItems;