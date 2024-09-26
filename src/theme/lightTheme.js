import { createTheme } from '@mui/material/styles';

export const themeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#25B4B0',
    },
    secondary: {
      main: '#F92A82',
    },
    background: {
      default: '#eaeaea',
    },
  },
  typography: {
    fontWeightRegular: 500,
    fontWeightLight: 300,
    fontFamily: 'Montserrat',
    fontWeightBold: 900,
    fontWeightMedium: 700,
  },
};

export const ligthTheme = createTheme(themeOptions);

