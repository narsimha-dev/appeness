import { HANDEL_SUCCESS, HANDEL_ERROR_MESSAGE } from "./actionTypes";

export function handleSuucessMessage(){
    return{
        type:HANDEL_SUCCESS,
        isOpen:true,
        alertAction:true,
        alertColor:"success",
        alertMessage:"Successfully logged in "
    }
}

export function handleErrorMessage(){
    return{
        type:HANDEL_ERROR_MESSAGE,
        isOpen:false,
        alertAction:true,
        alertColor:"danger",
        alertMessage:"Please provide valid inputes"
    }
}