import { useNavigate } from "react-router-dom"
const Thankyou = (props)=>{
    const navigate = useNavigate();
    return(
        <>
        <div>
        <h1 style={{color:"rgb(40, 116, 240)",fontWeight:"700",textAlign:"center",fontSize:"49px"}}>Your order has been placed!</h1>
        <p style={{color:'gray',fontSize:"17px",maxWidth:"600px",textAlign:"center",margin:"auto"}}>Thankyou for shopping with us. We'd like to know you that FlipkartClone has received your order and is preparing
        it for shipment. YOur estimate delivery is below. If you would like to visit your status of your order or make any changes
        , please visit Your Orders page before delivery.
        </p>
        <button style={{margin:"auto",cursor:"pointer" ,width:"150px",height:"40px",display:"block",marginTop:'70px',color:"white",fontSize:"18px",outline:"none",border:"none",backgroundColor:"rgb(40, 116, 240)"}} onClick={()=>navigate('/')} >Home</button>
        </div>
        </>
    )
}
export default Thankyou