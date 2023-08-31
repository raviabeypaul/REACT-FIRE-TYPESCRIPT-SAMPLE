import { styled } from '@mui/system';
import { defaultTheme } from "./Theme";

export const useStyles = () => {
  const Avatar = styled('div')`
    margin: 1px;
    background-color: ${defaultTheme.palette.primary.main};
  `;

  const BlueSubmitButton = styled('button')`
    margin-top: 10px;
    margin-bottom: 2px;
    background-color:  ${defaultTheme.palette.primary.main};
  `;

  return {
    Avatar,
    BlueSubmitButton,
  };
};

