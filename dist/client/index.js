'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _html5History = require('html5-history');

var _html5History2 = _interopRequireDefault(_html5History);

var _reactRedux = require('react-redux');

var _storeFactory = require('../common/utils/store-factory');

var _storeFactory2 = _interopRequireDefault(_storeFactory);

var _App = require('../common/containers/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = null;
if (window.$REDUX_STATE) {
  state = window.$REDUX_STATE;
  state.history = _html5History2.default;
  var store = (0, _storeFactory2.default)(state);
  try {
    (0, _reactDom.render)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(_App2.default, null)
    ), document.querySelector('.js-app'), function () {
      return window.document.documentElement.classList.add('t-react-rendered');
    });
  } catch (err) {
    /* eslint-disable no-console */
    console.error('Render error: ', err.stack);
  }
}
//# sourceMappingURL=index.js.map