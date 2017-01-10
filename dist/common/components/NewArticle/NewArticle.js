"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = function Article() {
  return _react2.default.createElement(
    "div",
    { className: "" },
    _react2.default.createElement(
      "form",
      { action: "/api/articles", method: "POST" },
      _react2.default.createElement(
        "div",
        null,
        "Title: ",
        _react2.default.createElement("input", { type: "text", name: "title" })
      ),
      _react2.default.createElement(
        "div",
        null,
        "Body: ",
        _react2.default.createElement("textarea", { name: "contents" })
      )
    )
  );
};

exports.default = Article;
module.exports = exports["default"];
//# sourceMappingURL=NewArticle.js.map