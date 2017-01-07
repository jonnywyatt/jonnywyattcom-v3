'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = require('../utils/request');

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = {
  articles: function articles() {
    return function (dispatch, getState) {
      var state = getState();
      var endpoint = typeof window === 'undefined' ? state.apiEndpointAbsolute : state.apiEndpointRelative;

      return (0, _request2.default)({ endpoint: endpoint, state: state }).then(function (response) {
        dispatch(actions.receiveArticle(response));
      });
    };
  },

  article: function article() {
    return function (dispatch, getState) {
      var state = getState();
      var endpoint = typeof window === 'undefined' ? state.apiEndpointAbsolute : state.apiEndpointRelative;

      return (0, _request2.default)({ endpoint: endpoint, state: state }).then(function (response) {
        dispatch(actions.receiveArticle(response));
      });
    };
  },

  receiveArticle: function receiveArticle(article) {
    return {
      type: 'RECEIVE_ARTICLE',
      stateKey: 'article',
      data: article
    };
  }
};

exports.default = actions;
module.exports = exports['default'];
//# sourceMappingURL=dataNeeds.js.map