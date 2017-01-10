'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slug = require('slug');

var _slug2 = _interopRequireDefault(_slug);

var _modelArticle = require('./helpers/model-article');

var _modelArticle2 = _interopRequireDefault(_modelArticle);

var _logger = require('../../common/utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return {
    getBySlug: function getBySlug(req, res) {
      _modelArticle2.default.find({ slug: req.params.slug }).lean().exec(function (err, articles) {
        if (err) {
          _logger2.default.error(err);
          return res.status(500);
        }
        res.json(articles[0] || {});
      });
    },
    getAll: function getAll(req, res) {
      _modelArticle2.default.find().lean().exec(function (err, articles) {
        if (err) {
          _logger2.default.error(err);
          return res.status(500);
        }
        res.json(articles);
      });
    },
    post: function post(req, res) {
      var article = new _modelArticle2.default({
        slug: (0, _slug2.default)(req.body.title, { lower: true, symbols: true }),
        createdDate: new Date().toISOString(),
        title: req.body.title,
        contents: req.body.contents
      });
      article.save(function (err, article) {
        if (err) {
          _logger2.default.error(err);
          return res.status(500);
        }
        if (req.xhr) return res.status(201).json(article);
        return res.redirect('/articles/' + article.slug);
      });
    }
  };
};

module.exports = exports['default'];
//# sourceMappingURL=api-article.js.map