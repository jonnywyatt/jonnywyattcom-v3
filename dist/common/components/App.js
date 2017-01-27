'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Home = require('../components/Home/Home');

var _Home2 = _interopRequireDefault(_Home);

var _About = require('../components/About/About');

var _About2 = _interopRequireDefault(_About);

var _NavBar = require('../containers/NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

var _Articles = require('../containers/Articles');

var _Articles2 = _interopRequireDefault(_Articles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.listenForRouteChanges();

      if (window.performance && window.performance.mark) {
        window.performance.mark('app-interactive');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var viewIndex = 0;
      if (this.props.routeName === 'articles') viewIndex = 1;else if (this.props.routeName === 'about') viewIndex = 2;

      return _react2.default.createElement(
        'div',
        { className: 'container margin-top-ml', 'data-view': this.props.routeName },
        _react2.default.createElement(_NavBar2.default, null),
        _react2.default.createElement(
          'main',
          { className: 'views', style: { transform: 'translateX(-' + viewIndex * (100 / 3) + '%)' } },
          _react2.default.createElement(_Home2.default, null),
          _react2.default.createElement(_Articles2.default, null),
          _react2.default.createElement(_About2.default, null)
        )
      );
    }
  }]);

  return App;
}(_react.Component);

App.propTypes = {
  listenForRouteChanges: _react.PropTypes.func.isRequired
};

exports.default = App;
module.exports = exports['default'];
//# sourceMappingURL=App.js.map