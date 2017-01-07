'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _NavBar = require('../components/NavBar/NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _history = require('../actions/history');

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeRouteName: state.matchedRoute.routeName
  };
};

var mapDispatchToProps = {
  startRouteChange: _history2.default.startRouteChange
};

/* Create a container component by connecting to the store */
var NavBarContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_NavBar2.default);

exports.default = NavBarContainer;
module.exports = exports['default'];
//# sourceMappingURL=NavBar.js.map