'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pathToRegexp = require('path-to-regexp');

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (path, cb) {
  var routeData = {
    path: path
  };

  switch (routeData.path) {
    case '/':
      routeData.routeName = 'home';
      break;

    case '/about':
      routeData.routeName = 'about';
      break;

    case '/articles/new':
      routeData.routeName = 'article-new';
      break;

    case '/articles':
      routeData.routeName = 'articles';
      routeData.dataNeed = 'articles';
      break;

    default:
      {
        var longPath = (0, _pathToRegexp2.default)('/articles/:articleId', [], { end: false });
        var matched = longPath.exec(routeData.path);
        if (matched && matched.length) {
          routeData.routeName = 'article';
          routeData.dataNeed = 'article';
          routeData.stateKeyToCompare = 'articleId';
          routeData.dataNeedParam = matched[1];
          break;
        }
        return cb({
          httpCode: '404'
        });
      }
  }

  cb(null, routeData);
};

module.exports = exports['default'];
//# sourceMappingURL=match-route.js.map