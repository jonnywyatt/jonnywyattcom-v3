import React from 'react';
import { render } from 'react-dom';
import {createBrowserHistory} from 'history';
import { Provider } from 'react-redux';
import storeFactory from '../common/utils/store-factory';
import App from '../common/containers/App';
import analytics from './analytics';
import './sass/main.scss';

if (!window.Promise) {
  window.Promise = Promise;
}

let state = null;
if (window.$REDUX_STATE) {
  state = window.$REDUX_STATE;
  state.history = createBrowserHistory();
  const store = storeFactory(state);
  try {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.querySelector('.js-app'),
      () => {
        window.document.documentElement.classList.add('t-react-rendered');
        analytics(window, document, 'UA-58066002-1');
      }
    );
  } catch (err) {
    /* eslint-disable no-console */
    console.error('Render error: ', err.stack);
  }
}
