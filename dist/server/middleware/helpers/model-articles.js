'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mongoose = require('./db.js');
var Articles = mongoose.model('Articles', {
  count: { type: Number, required: true },
  items: { type: Array, required: true }
});

exports.default = Articles;
module.exports = exports['default'];
//# sourceMappingURL=model-articles.js.map