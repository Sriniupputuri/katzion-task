import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk'
import { tableDataReducer } from "./reducers/tableDataReducer";

const initialState = {}
const reducer = combineReducers({

    tableData : tableDataReducer
}
)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose 
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store