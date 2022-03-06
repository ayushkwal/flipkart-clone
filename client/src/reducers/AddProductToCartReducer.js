const initialState = [];
const GetProductDetailsReducer = (state = initialState, action) => {

    // console.log('reached here')
    switch (action.type) {
        case "ADD_PRODUCT_TO_CART_DETAILS":
            const item = action.payload;
            const exist = state.find(product => product.id == item.id)
            if (exist)
            {
                return state;
            }
            return [...state, item];

        case "ADD_PRODUCT_TO_CART_FAIL": return action.payload;


        case "REMOVE_PRODUCT_FROM_CART":
            console.log('deleting..')
            
            const newItem = state.filter(product => product.id != action.payload)
            console.log(newItem)
            return newItem;

        case "EMPTY_MY_CART":
            return [];


        default: return state;
    }
}
export default GetProductDetailsReducer;