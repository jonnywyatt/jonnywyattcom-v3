import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers/index';

const storeMiddleware = applyMiddleware(thunkMiddleware);

export default (initialState) => {
  return createStore(reducers, initialState, storeMiddleware);
};
