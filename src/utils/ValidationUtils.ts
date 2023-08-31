import { AppError } from "../dtos/AppError";
import { ERROR_CODES, ERROR_MESSAGES } from "./Constants";

export const validateEmail=(email : string)=> {
    var re = /\S+@\S+\.\S+/;
    let isValid = re.test(email);
    if(!isValid){
        throw new AppError(ERROR_MESSAGES.INVALID_EMAIL,ERROR_CODES.VALIDATION_ERROR)
    }
  }

  export const validatePassword = (password : string)=>{
    if(password.length<8){
        throw new AppError(ERROR_MESSAGES.PASSWORD_LENGTH_IS_LESS_THAN_8_DIGITS,ERROR_CODES.VALIDATION_ERROR)
    }
    return true;
  }