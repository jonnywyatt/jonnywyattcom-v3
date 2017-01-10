'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Articles = require('../components/Articles/Articles');

var _Articles2 = _interopRequireDefault(_Articles);

var _history = require('../actions/history');

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    articles: state.articles
  };
};

var mapDispatchToProps = {
  startRouteChange: _history2.default.startRouteChange
};

/* Create a container component by connecting to the store */
var ArticlesContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Articles2.default);

exports.default = ArticlesContainer;
module.exports = exports['default'];
//# sourceMappingURL=Articles.js.map