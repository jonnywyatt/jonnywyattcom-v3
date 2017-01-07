'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _history = require('../actions/history');

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state.matchedRoute);
};

var mapDispatchToProps = {
  listenForRouteChanges: _history2.default.listenForRouteChanges
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_App2.default);
module.exports = exports['default'];
//# sourceMappingURL=App.js.map