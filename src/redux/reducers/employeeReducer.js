import { GET_EMPLOYEEDETALS } from "../actions/actionTypes";

const initiliseLoginState={
    employees:[]
}
export function employeeReducer(state=initiliseLoginState,action){
    console.log("action.payload: :", action.payload)
    switch(action.type){
        
        case GET_EMPLOYEEDETALS:
            return{...state,employees:action.payload}
        default:
            return{...state}    
        }
}