"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var About = function About() {
  return _react2.default.createElement(
    "div",
    { className: "view about" },
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
            "About me"
          ),
          _react2.default.createElement(
            "p",
            null,
            _react2.default.createElement(
              "strong",
              null,
              "I have a very strong track record of rapidly delivering quality software."
            )
          ),
          _react2.default.createElement(
            "p",
            null,
            "The core of my skillset is front end and I\u2019ve added over 2 years\u2019 solid experience in Node.js and React. I have a good handle on the array of developments in the Javascript space, plus the experience to know which of them to benefit from. I\u2019m passionate about web performance and know how to measure and achieve it."
          ),
          _react2.default.createElement(
            "p",
            null,
            "I understand every angle of a successful agile team including cross-disciplinary collaboration, user-centred testing and design, lean UX, early & continuous delivery, TDD, test automation, pairing and how to funnel business requirements through user stories."
          )
        )
      )
    )
  );
};

exports.default = About;
module.exports = exports["default"];
//# sourceMappingURL=About.js.map