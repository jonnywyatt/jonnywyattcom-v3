import React from 'react';
import { render } from 'react-dom';
import History from 'html5-history';
import { Provider } from 'react-redux';
import storeFactory from '../common/utils/store-factory';
import App from '../common/containers/App';

let state = null;
if (window.$REDUX_STATE) {
  state = window.$REDUX_STATE;
  state.history = History;
  const store = storeFactory(state);
  try {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector('.js-app'),
      () => {
        window.document.documentElement.classList.add('t-react-rendered');
        window.performance && window.performance.mark && window.performance.mark('app-interactive');
      }
    );
  } catch (err) {
    /* eslint-disable no-console */
    console.error('Render error: ', err.stack);
  }
}
