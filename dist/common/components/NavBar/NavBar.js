"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBar = function NavBar(props) {
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
          _react2.default.createElement(
            "div",
            { className: "navbar__main" },
            _react2.default.createElement(
              "h1",
              { className: "navbar__title navbar__indent" },
              "Jonny Wyatt"
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "bg-light" },
      _react2.default.createElement(
        "div",
        { className: "container-fluid-max" },
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "div",
            { className: "col-xs-12" },
            _react2.default.createElement(
              "div",
              { className: "navbar__links" },
              _react2.default.createElement(
                "div",
                { className: "tabs text-sm" },
                _react2.default.createElement(
                  "div",
                  { className: "l-inline-container" },
                  _react2.default.createElement(
                    "div",
                    { className: "l-vcenter l-vcenter--two-thirds" },
                    _react2.default.createElement(
                      "a",
                      {
                        className: "t-nav-jobs tabs__tab navbar__link" + (props.activeRouteName === 'about' ? ' active' : ''),
                        href: "/about",
                        onClick: props.startRouteChange
                      },
                      "About"
                    ),
                    _react2.default.createElement(
                      "a",
                      {
                        className: "t-nav-job-stats tabs__tab navbar__link" + (props.activeRouteName === 'contact' ? ' active' : ''),
                        href: "/contact",
                        onClick: props.startRouteChange
                      },
                      "Contact"
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
};

NavBar.propTypes = {
  startRouteChange: _react.PropTypes.func.isRequired
};

exports.default = NavBar;
module.exports = exports["default"];
//# sourceMappingURL=NavBar.js.map