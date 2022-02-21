
const initialState = [];



const GetProductReducer = (state = initialState, action) => {


    switch (action.type) {
        case "GET_PRODUCTS": return action.payload;
        case "GET_PRODUCTS_FAIL": return action.payload;
        default: return state;
    }
}
export default GetProductReducer;