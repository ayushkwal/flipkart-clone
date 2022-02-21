
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
        const a = await fetch(`/productinfo/${id}`);
        const b = await a.json();
        console.log('bbbbbbb',b)
        dispatch({type:'GET_PRODUCT_DETAILS',payload:b})
    }   
    catch(err){
        console.log(err)
        dispatch({type:'GET_PRODUCT_DETAILS_FAIL',payload:err})
    }    
}