'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _dataNeeds = require('../actions/dataNeeds');

var _dataNeeds2 = _interopRequireDefault(_dataNeeds);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (dispatch, matchedRoute) {
  if (matchedRoute.dataNeed) {
    return dispatch(_dataNeeds2.default[matchedRoute.dataNeed](matchedRoute.dataNeedParam)).catch(function (err) {
      _logger2.default.error('Error fetching data needs ' + matchedRoute.dataNeed + '.', { stack: err.stack });
      throw err;
    });
  }
  return Promise.resolve();
};

module.exports = exports['default'];
//# sourceMappingURL=fetch-data-needs.js.map