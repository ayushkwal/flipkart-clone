
const initialState = {};



const GetProductDetailsReducer = (state = initialState, action) => {


    switch (action.type) {
        case "GET_PRODUCT_DETAILS": return action.payload;
        case "GET_PRODUCT_DETAILS_FAIL": return action.payload;
        default: return state;
    }
}
export default GetProductDetailsReducer;