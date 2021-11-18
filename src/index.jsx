import React from 'react';
import ReactDOM from 'react-dom';
import LinearProgress from '@material-ui/core/LinearProgress';

import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './languages';

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<LinearProgress color="secondary" />}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
