import React from "react";
import { Colors, defaultTheme } from "../styles/Theme";
import { ElementProps } from "../interfaces/ElementProps";
import { Box } from "@mui/material";

type BoxProps = ElementProps & {
    style ?: React.CSSProperties | undefined
}

export const BoxComponent = (props : BoxProps) => {
    const boxStyle : React.CSSProperties | undefined = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };

    return(
        <Box style={{...boxStyle, ...props.style}}>
            {props.children}
        </Box>
    )
}