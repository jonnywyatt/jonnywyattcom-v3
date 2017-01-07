'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (options) {
  return _axios2.default.get(options.endpoint).catch(function (err) {
    _logger2.default.error(err);
  });
};

module.exports = exports['default'];
//# sourceMappingURL=request.js.map