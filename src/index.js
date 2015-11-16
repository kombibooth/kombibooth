import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import configureStore from './store';
import routes from './routes';

const history = createHashHistory();
const store = configureStore();

render(
  <Provider store={ store } key="provider">
    <Router history={ history } children={ routes } />
  </Provider>,
  document.getElementById('root')
);
