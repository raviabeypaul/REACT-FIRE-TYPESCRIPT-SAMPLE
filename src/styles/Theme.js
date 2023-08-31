import { createTheme } from "@mui/material";

export const Colors = {
  primaryColor : '#170f4f',
  secondaryColor : 'white',
  pageBg : '#f3f3f6'
}

export const Size = {
  one : 1,
  ten : 10,
  twenty : 20,
  sixtyFive : 65
}

export const defaultTheme = createTheme({
    palette: {
      primary: {
        main: Colors.primaryColor,
        contrastText: Colors.secondaryColor,
       
      },
      common : {
        pageBg : Colors.pageBg
      },
    },
    shape : {
        boxMarginTop : Size.ten
    },
    components : {
      MuiButton : {
        variants : [
          {
            props : {variant : 'blue-wrap-text'},
            style : {
              marginTop : Size.twenty, marginBottom : Size.twenty, backgroundColor : Colors.primaryColor, color : Colors.secondaryColor
            }
          }
        ]
      },
      MuiAvatar : {
        variants : [
          {
            props : { variant : 'avatar-blue'},
            style : {
              backgroundColor : Colors.primaryColor,
              margin : 1
            }
          }
        ]
      },
      MuiDrawer : {
        styleOverrides: {
          paper: {
            backgroundColor: Colors.pageBg,
            marginTop : 65
          },
          
        },
        
      }
    }
  });