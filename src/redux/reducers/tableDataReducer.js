import { TABLE_DATA_FAIL, TABLE_DATA_REQUEST, TABLE_DATA_sUCCESS, UPDATE_TABLE_DATA } from "../constants/tableDataConstants";

export const tableDataReducer = (state= {data: []}, action) =>{
    switch(action.type){
        case TABLE_DATA_REQUEST:
            return {
                loading: true
            }
        case TABLE_DATA_sUCCESS:
            return {
                loading: false,
                data: action.payload
            }
        case TABLE_DATA_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        case UPDATE_TABLE_DATA:
            return{
                data: action.payload
            }
        default:
            return state
    }
}