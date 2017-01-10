'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = _db2.default.model('Article', {
  slug: { type: String, required: true },
  title: { type: String, required: true },
  createdDate: { type: Date, required: true },
  contents: { type: String, required: true }
});

exports.default = Article;
module.exports = exports['default'];
//# sourceMappingURL=model-article.js.map