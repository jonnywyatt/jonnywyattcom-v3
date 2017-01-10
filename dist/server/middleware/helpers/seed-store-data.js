'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _storeFactory = require('../../../common/utils/store-factory');

var _storeFactory2 = _interopRequireDefault(_storeFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (appConfig, matchedRoute) {
  return (0, _storeFactory2.default)({
    apiEndpointRootAbsolute: appConfig.appHost + '/api',
    apiEndpointRootRelative: '/api',
    matchedRoute: matchedRoute
  });
};

module.exports = exports['default'];
//# sourceMappingURL=seed-store-data.js.map