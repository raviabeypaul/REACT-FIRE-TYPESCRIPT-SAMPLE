import React, { ErrorInfo, ReactNode } from "react";
import { AppError } from "../dtos/AppError";
import { enqueueSnackbar } from "notistack";

interface Props {
    children?: ReactNode;
  }
  
  interface State {
    hasError: boolean;
  }
export class ErrorBoundary extends React.Component<Props,State> {
    public state: State = {
        hasError: false
    }
    constructor(props:Props){
        super(props);
    }

    
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if(error instanceof AppError){
        enqueueSnackbar(error.message, {autoHideDuration : 3000, variant : 'error'})
    }
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Sorry.. there was an error</h1>;
    }

    return this.props.children;
  }

}