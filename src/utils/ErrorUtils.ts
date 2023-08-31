import { enqueueSnackbar } from "notistack"
import { AppError } from "../dtos/AppError"
import { FirebaseError } from "firebase/app"

export const showErrorMessage = (error: Error|unknown)=>{
    if (error instanceof AppError) {
        enqueueSnackbar(error.message, { autoHideDuration: 3000, variant: 'error' })
      }else if(error instanceof FirebaseError){
        enqueueSnackbar(error.code, { autoHideDuration: 3000, variant: 'error' })
      }
      else{
        let message = "Some Error Occurred"
        if(error instanceof Error)
        {
          message = error.message
        }
        enqueueSnackbar(message, { autoHideDuration: 3000, variant: 'error' })
      }
    }