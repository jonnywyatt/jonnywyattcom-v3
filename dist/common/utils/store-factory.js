'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = require('../reducers/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storeMiddleware = (0, _redux.applyMiddleware)(_reduxThunk2.default);

exports.default = function (initialState) {
  return (0, _redux.createStore)(_index2.default, initialState, storeMiddleware);
};

module.exports = exports['default'];
//# sourceMappingURL=store-factory.js.map