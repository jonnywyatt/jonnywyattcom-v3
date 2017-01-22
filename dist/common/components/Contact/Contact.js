"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact() {
  return _react2.default.createElement(
    "div",
    { className: "view contact" },
    _react2.default.createElement(
      "div",
      { className: "container-fluid-max" },
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "col-12-sm" },
          _react2.default.createElement(
            "h1",
            { className: "heading heading--1 margin-bottom-ml" },
            "Contact me"
          ),
          _react2.default.createElement(
            "div",
            { className: "margin-bottom-sm" },
            _react2.default.createElement(
              "div",
              { className: "icon-text-container" },
              _react2.default.createElement("i", { className: "icon-envelope" }),
              _react2.default.createElement(
                "a",
                { className: "link", href: "mailto:jonnywyatt@yahoo.co.uk" },
                "jonnywyatt@yahoo.co.uk"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "margin-bottom-sm" },
            _react2.default.createElement(
              "div",
              { className: "icon-text-container" },
              _react2.default.createElement("i", { className: "icon-github" }),
              _react2.default.createElement(
                "a",
                { className: "link", href: "http://github.com/jonnywyatt" },
                "github.com/jonnywyatt"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "div",
              { className: "icon-text-container" },
              _react2.default.createElement("i", { className: "icon-linkedin" }),
              _react2.default.createElement(
                "a",
                { className: "link", href: "https://uk.linkedin.com/in/jonwyatt" },
                "uk.linkedin.com/in/jonwyatt"
              )
            )
          )
        )
      )
    )
  );
};

exports.default = Contact;
module.exports = exports["default"];
//# sourceMappingURL=Contact.js.map