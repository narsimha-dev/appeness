import { HANDEL_SUCCESS, HANDEL_ERROR_MESSAGE } from "../actions/actionTypes";

const initiliseLoginState={
    isOpen:false,
    alertAction:false,
    alertColor:'',
    alertMessage:''
}
export function loginReducer(state=initiliseLoginState,action){
    switch(action.type){
        case HANDEL_SUCCESS:
            return{...state,isOpen:action.isOpen,alertAction:action.alertAction,alertColor:action.alertColor,alertMessage:action.alertMessage}
        
        case HANDEL_ERROR_MESSAGE:
            return{...state,isOpen:action.isOpen,alertAction:action.alertAction,alertColor:action.alertColor,alertMessage:action.alertMessage}
        default:
            return{...state}    
        }
}