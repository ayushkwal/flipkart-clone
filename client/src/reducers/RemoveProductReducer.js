
const initialState = [];

const RemoveProductReducer = (state = initialState, action) => {


    switch (action.type) {
        case "REMOVE_PRODUCT": return action.payload;
        case "REMOVE_PRODUCT_FAIL": return action.payload;
        default: return state;
    }
}
export default RemoveProductReducer;