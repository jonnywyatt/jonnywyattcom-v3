'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _reactInit = require('../middleware/react-init');

var _reactInit2 = _interopRequireDefault(_reactInit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appConfig = require('../../../config/' + app.get('env'));
var router = _express2.default.Router();

router.get('/', (0, _reactInit2.default)(appConfig));

module.exports = router;
//# sourceMappingURL=index.js.map