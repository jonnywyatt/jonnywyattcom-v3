'use strict';

var _reactInit = require('./middleware/react-init');

var _reactInit2 = _interopRequireDefault(_reactInit);

var _logger = require('../common/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
var hbs = exphbs.create({
  extname: '.hbs',
  defaultLayout: path.join(__dirname, '../../src/server/views/layout')
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../../src/server/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));

var env = app.get('env');
var appConfig = require('../../config/' + env + '.json');
app.get('*', (0, _reactInit2.default)(appConfig).init);
_logger2.default.info('Application started on port 3000');
app.listen(3000);

module.exports = app;
//# sourceMappingURL=init.js.map