import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import {  Colors, Size } from "../styles/Theme";

export type AppButtonProps = ButtonProps & {
    buttonType ?:'type1' | 'type2'
    text? : string
    buttonWidthType? : 'fullwidth' | 'wrapped' | 'half'
    
}
const buttonStyle : React.CSSProperties | undefined={
    backgroundColor : Colors.primaryColor, color : Colors.secondaryColor
}


export const AppButtonField: React.FC<AppButtonProps> = (buttonProps: AppButtonProps) => {

    let createStyle : React.CSSProperties = {
    }
    if(buttonProps.buttonWidthType === 'half'){
      createStyle.width = '48%'
    }
    
    let style = {...buttonStyle, ...createStyle, ...buttonProps.style }

    return (
        <Button
        {...buttonProps}
        type="submit"
        fullWidth={buttonProps.buttonWidthType === 'fullwidth' ? true: false}
        style={style}
      >
        {buttonProps.text}
      </Button>
    );
}
