'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _logger = require('../../../common/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uristring = process.env.MONGODB_URI || 'mongodb://localhost/jonnywyattcom';

_mongoose2.default.connect(uristring, function (err, res) {
  if (err) {
    _logger2.default.error('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    _logger2.default.info('Succeeded connected to: ' + uristring);
    _logger2.default.info(res);
  }
});

exports.default = _mongoose2.default;
module.exports = exports['default'];
//# sourceMappingURL=db.js.map