import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import store from './redux/store';
import AppRouter from './router';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Provider store={store()}>
        <AppRouter />
      </Provider>
    </MuiPickersUtilsProvider>
  </ThemeProvider>
);

export default App;
