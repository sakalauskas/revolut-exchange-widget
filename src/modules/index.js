import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import currency from "./currency";

export default combineReducers({
    routing: routerReducer,
    currency
})