export const getProducts = async(dispatch)=>{ 
    try{
        const a = await fetch('/products');
        const b = await a.json();
        dispatch({type:'GET_PRODUCTS',payload:b})
    }   
    catch(err){
        console.log(err)
        dispatch({type:'GET_PRODUCTS_FAIL',payload:err})
    }    
}



export const getProductDetails = (id)=> async(dispatch)=>{ 
    try{
        const c = await fetch(`/productinfo/${id}`);
        const d = await c.json();
        dispatch({type:'GET_PRODUCT_DETAILS',payload:d})
    }   
    catch(err){
        console.log(err)
        dispatch({type:'GET_PRODUCT_DETAILS_FAIL',payload:err})
    }    
}

export const addToCart =({id,userid})=> async(dispatch)=>{
    console.log('fd')
    try{
        const c = await fetch(`/productinfo/${id}`);
        const d = await c.json();
        console.log('add item ',d);
        const f = await fetch('/addproducttodb',{
            method:'post',
            body:JSON.stringify({cart:id,user_id:userid}),
            headers:{
                'content-type':'application/json'
            }
        })
        dispatch({type:'ADD_PRODUCT_TO_CART_DETAILS',payload:d})
    }   
    catch(err){
        console.log(err)
        dispatch({type:'ADD_PRODUCT_TO_CART_FAIL',payload:err})
    }    
}
//we will remove item from current(AddProductToCart) Reducer
export const removeFromCart =({id,userid})=> async(dispatch)=>{
    
    try{
        const fff = await fetch('http://localhost:5000/removeproducttodb',{
            method:'post',
            body:JSON.stringify({cart:id,user_id:userid}),
            headers:{
                'content-type':'application/json'
            }
        })
        console.log('fffff',fff);
        dispatch({type:'REMOVE_PRODUCT_FROM_CART',payload:id}) 
    }   
    catch(err){
        console.log(err)
        dispatch({type:'REMOVE_PRODUCT_FROM_CART',payload:id}) 
    }   

  
}

//we will remove all items when order success from current(AddProductToCart) Reducer
export const removeFromCartAllProduct =()=> async(dispatch)=>{

    
        dispatch({type:'EMPTY_MY_CART'})   
}  
