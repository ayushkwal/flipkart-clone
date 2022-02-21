import GetProductReducer from "./GetProductReducer";
import GetProductDetailsReducer from "./GetProductDetailsReducer";
import {combineReducers} from 'redux'
const rootReducer =  combineReducers({
    GetProductReducer,
    GetProductDetailsReducer,
})
export default rootReducer