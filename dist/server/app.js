'use strict';

var _reactInit = require('./middleware/react-init');

var _reactInit2 = _interopRequireDefault(_reactInit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../../src/server/views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var env = app.get('env');
var appConfig = require('../../config/' + env + '.json');
app.get('*', (0, _reactInit2.default)(appConfig).init);
console.log('Application started on port 3000');
app.listen(3000);

module.exports = app;
//# sourceMappingURL=app.js.map