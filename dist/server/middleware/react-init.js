'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _reactRedux = require('react-redux');

var _logger = require('../../common/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _App = require('../../common/containers/App');

var _App2 = _interopRequireDefault(_App);

var _matchRoute = require('../../common/utils/match-route');

var _matchRoute2 = _interopRequireDefault(_matchRoute);

var _fetchDataNeeds = require('../../common/utils/fetch-data-needs');

var _fetchDataNeeds2 = _interopRequireDefault(_fetchDataNeeds);

var _seedStoreData = require('./helpers/seed-store-data');

var _seedStoreData2 = _interopRequireDefault(_seedStoreData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (appConfig) {
  return {
    init: function init(req, res) {
      (0, _matchRoute2.default)(req.originalUrl, function (error, matchedRoute) {
        if (error) {
          return res.status(error.httpCode).send();
        }
        var store = (0, _seedStoreData2.default)(appConfig, matchedRoute, req);
        return (0, _fetchDataNeeds2.default)(store.dispatch, matchedRoute).then(function () {
          var appHtml = (0, _server.renderToString)(_react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(_App2.default, null)
          ));
          res.render('index', {
            appHtml: appHtml,
            appState: JSON.stringify(store.getState()).replace(/<\//g, '\\x3C/')
          });
        }).catch(function (err) {
          _logger2.default.error(err);
          res.render('error', { error: err.displayError || 'Application rendering error', noAnalytics: true });
        });
      });
    }
  };
};

module.exports = exports['default'];
//# sourceMappingURL=react-init.js.map