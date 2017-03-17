const createStore = require('redux').createStore;
const reducers = require('./reducers/index');

module.exports = () => {
  return createStore(reducers);
};
