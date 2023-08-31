import * as React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import {  Size } from "../styles/Theme";

const styles = {
    appTextStyle: {marginTop : Size.twenty, marginBottom : Size.twenty}
}

type AppTextFieldsProps = TextFieldProps & {
    textfieldType ?:'type1'
}

export const AppTextField: React.FC<AppTextFieldsProps> = (textfieldProps: AppTextFieldsProps) => {
    return (
        <TextField
            {...textfieldProps}
            style={styles.appTextStyle}
        ></TextField>
    );
}
