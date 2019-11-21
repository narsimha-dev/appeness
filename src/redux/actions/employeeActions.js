import { GET_EMPLOYEEDETALS } from './actionTypes';

export function getEmployeeDetails(jsonData){
    console.log("jsonData:", jsonData)
    return {
        type:GET_EMPLOYEEDETALS,
        payload:jsonData
    }
}


