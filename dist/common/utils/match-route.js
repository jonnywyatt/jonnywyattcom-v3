'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _pathToRegexp = require('path-to-regexp');

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (path, cb) {
  var routeData = {
    path: path
  };

  switch (routeData.path) {
    case '/about':
      routeData.routeName = 'about';
      break;

    case '/contact':
      routeData.routeName = 'contact';
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

          var _matched = _slicedToArray(matched, 2);

          routeData.path = _matched[0];
          routeData.articleId = _matched[1];

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