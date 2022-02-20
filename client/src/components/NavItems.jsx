import React from "react";
import {items } from '../constants/items'

console.log(items);

const NavItems = ()=>{

    const itemstack = {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        border:"5px solid #f2f2f2"
    }

    return(
        <div style={itemstack}>
            
            {
                items.map((item)=>{
                    return (
                        <div style={{display:"flex",flexDirection:"column"}}>
                        <img style={{width:"60px"}} src={item.url}></img>
                        <h5>
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