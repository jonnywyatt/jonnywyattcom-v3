'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressHandlebars = require('express-handlebars');

var _expressHandlebars2 = _interopRequireDefault(_expressHandlebars);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _logger = require('../common/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

var _reactInit = require('./middleware/react-init');

var _reactInit2 = _interopRequireDefault(_reactInit);

var _apiArticle = require('./middleware/api-article');

var _apiArticle2 = _interopRequireDefault(_apiArticle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var hbs = _expressHandlebars2.default.create({
  extname: '.hbs',
  defaultLayout: _path2.default.join(__dirname, '../../src/server/views/layout')
});
app.set('port', process.env.PORT || 5000);
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', _path2.default.join(__dirname, '../../src/server/views'));

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static(_path2.default.join(__dirname, '../../public')));

var env = app.get('env');
var appConfig = require('../../config/' + env + '.json');
var apiArticle = (0, _apiArticle2.default)(appConfig);

app.get('/api/articles/:slug', apiArticle.getBySlug);
app.get('/api/articles', apiArticle.getAll);
app.post('/api/articles', apiArticle.post);

app.get('*', (0, _reactInit2.default)(appConfig).init);
app.listen(app.get('port'), function () {
  _logger2.default.info('Node app is running on port', app.get('port'));
});

module.exports = app;
//# sourceMappingURL=init.js.map