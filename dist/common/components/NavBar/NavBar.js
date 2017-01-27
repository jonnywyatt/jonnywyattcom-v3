'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icons = require('../Icons/Icons');

var _Icons2 = _interopRequireDefault(_Icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavBar = function NavBar(props) {
  return _react2.default.createElement(
    'div',
    { className: 't-navbar navbar' },
    _react2.default.createElement(
      'div',
      { className: 'container-fluid-max' },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-12-sm' },
          _react2.default.createElement(
            'div',
            { className: 'navbar__main' },
            _react2.default.createElement(
              'h1',
              { className: 'navbar__title navbar__indent' },
              _react2.default.createElement('img', { className: 'navbar__logo', src: '/svg/logo.svg' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'navbar__byline' },
              'Front end & Node.js developer'
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'container-fluid-max' },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-12-sm' },
          _react2.default.createElement(
            'nav',
            { className: 'menu' },
            _react2.default.createElement(
              'ul',
              { className: 'menu__list' },
              _react2.default.createElement(
                'li',
                {
                  className: 'menu__item ' + (props.activeRouteName === 'home' ? ' menu__item--current' : '') },
                _react2.default.createElement(
                  'a',
                  {
                    className: 't-nav-jobs menu__link',
                    href: '/',
                    onClick: props.startRouteChange
                  },
                  'Home'
                )
              ),
              _react2.default.createElement(
                'li',
                {
                  className: 'menu__item ' + (props.activeRouteName === 'articles' ? ' menu__item--current' : '') },
                _react2.default.createElement(
                  'a',
                  {
                    className: 't-nav-jobs menu__link',
                    href: '/articles',
                    onClick: props.startRouteChange
                  },
                  'Articles'
                )
              ),
              _react2.default.createElement(
                'li',
                {
                  className: 'menu__item ' + (props.activeRouteName === 'about' ? ' menu__item--current' : '') },
                _react2.default.createElement(
                  'a',
                  {
                    className: 't-nav-jobs menu__link',
                    href: '/about',
                    onClick: props.startRouteChange
                  },
                  'About me'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'menu__item menu__item-last' },
                _react2.default.createElement(_Icons2.default, null)
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
module.exports = exports['default'];
//# sourceMappingURL=NavBar.js.map