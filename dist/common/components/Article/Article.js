"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = function Article(props) {
  return _react2.default.createElement(
    "div",
    { className: "" },
    _react2.default.createElement(
      "div",
      { className: "container-fluid-max" },
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-xs-12" },
          "Article: ",
          props.article && props.article.title
        )
      )
    )
  );
};

exports.default = Article;
module.exports = exports["default"];
//# sourceMappingURL=Article.js.map