import { createTheme } from '@material-ui/core/styles';
import { COLOR } from './color';

const theme = createTheme({
  palette: {
    primary: {
      main: COLOR.primary,
      dark: COLOR.primaryDark,
    },
    secondary: {
      main: COLOR.secondary,
    },
    error: {
      main: COLOR.danger,
    },
    warning: {
      main: COLOR.warning,
    },
    info: {
      main: COLOR.info,
    },
    success: {
      main: COLOR.success,
    },
    text: {
      primary: COLOR.secondary,
    },
    divider: COLOR.divider,
    background: {
      default: COLOR.background,
    },
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: 'San Francisco Display',
    fontSize: 14,
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: 'none',
      },
    },
  },
});

export default theme;
