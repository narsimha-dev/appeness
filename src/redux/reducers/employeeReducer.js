import { GET_EMPLOYEEDETALS } from "../actions/actionTypes";

const initiliseLoginState={
    employees:[]
}
export function employeeReducer(state=initiliseLoginState,action){
    switch(action.type){
        
        case GET_EMPLOYEEDETALS:
            return{...state,employees:action.payload}
        default:
            return{...state}    
        }
}