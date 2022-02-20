import React from "react"
import NavItems from './NavItems';
import Banner from './Banner';
import ProductBanner from './ProductBanner'
import CardOfDeals from "./CardOfDeals";
import CardOfDealsMenFootwear from "./CardOfDealsMenFootwear"
import CardClothing from "./CardClothing";
import LoginDialog from "./LoginDialog"

const dealandad = {
    // display:"inline",
    // flexDirection:"row"
    display:"flex"
    
    
}

const Home = ()=>{

    return(
        <>
        <NavItems />
        <Banner />
        <div style={dealandad}>
        <div style={{width:"80%"}}>
            <CardOfDeals />
        </div>
        <img style={{display:"inline",width:"18%"}} src="https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70"></img>
        </div>
        <CardOfDealsMenFootwear />
        <CardClothing />
        
        </>
    )
}
export default Home