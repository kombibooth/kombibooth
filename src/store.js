import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';

import reducers from './reducers';
import DevTools from './components/dev-tools';


const finalCreateStore = compose(
  applyMiddleware(thunk),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
)(createStore);

export default function configureStore (initialState) {
  const store = finalCreateStore(reducers, initialState);

  module.hot.accept('./reducers', () =>
    store.replaceReducer(require('./reducers'))
  );

  return store;
}
