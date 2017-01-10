'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Article = require('../components/Article/Article');

var _Article2 = _interopRequireDefault(_Article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    article: state.article
  };
};

/* Create a container component by connecting to the store */
var ArticleContainer = (0, _reactRedux.connect)(mapStateToProps)(_Article2.default);

exports.default = ArticleContainer;
module.exports = exports['default'];
//# sourceMappingURL=Article.js.map