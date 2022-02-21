import thunk from 'redux-thunk'
import { createStore,applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "./reducers/index";

const middlewaress = [thunk];
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middlewaress)));
export default store;