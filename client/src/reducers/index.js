import GetProductReducer from "./GetProductReducer";
import GetProductDetailsReducer from "./GetProductDetailsReducer";
import AddProductToCartReducer from "./AddProductToCartReducer"
import {combineReducers} from 'redux'
const rootReducer =  combineReducers({
    GetProductReducer,
    GetProductDetailsReducer,
    AddProductToCartReducer

})
export default rootReducer