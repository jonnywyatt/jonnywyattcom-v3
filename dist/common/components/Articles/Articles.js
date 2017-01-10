"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Articles = function Articles(props) {
  return _react2.default.createElement(
    "div",
    { className: "t-navbar navbar" },
    _react2.default.createElement(
      "div",
      { className: "container-fluid-max" },
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-xs-12" },
          props.articles && props.articles.map(function (article, idx) {
            return _react2.default.createElement(
              "div",
              { key: idx },
              _react2.default.createElement(
                "a",
                { href: "/articles/" + article.slug, onClick: props.startRouteChange },
                article.title
              )
            );
          })
        )
      )
    )
  );
};

Articles.propTypes = {
  startRouteChange: _react.PropTypes.func.isRequired
};

exports.default = Articles;
module.exports = exports["default"];
//# sourceMappingURL=Articles.js.map