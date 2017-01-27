"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "a",
            { className: "link", href: "mailto:jonnywyatt@yahoo.co.uk" },
            _react2.default.createElement("i", { className: "icon-envelope" })
        ),
        _react2.default.createElement(
            "a",
            { className: "link", href: "http://github.com/jonnywyatt" },
            _react2.default.createElement("i", { className: "icon-github" })
        ),
        _react2.default.createElement(
            "a",
            { className: "link", href: "https://uk.linkedin.com/in/jonwyatt" },
            _react2.default.createElement("i", { className: "icon-linkedin" })
        )
    );
};

module.exports = exports["default"];
//# sourceMappingURL=Icons.js.map