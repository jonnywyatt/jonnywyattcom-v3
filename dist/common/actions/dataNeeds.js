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
      var endpoint = typeof window === 'undefined' ? state.apiEndpointRootAbsolute : state.apiEndpointRootRelative;
      endpoint = endpoint + '/articles';

      return (0, _request2.default)({ endpoint: endpoint, state: state }).then(function (response) {
        dispatch(actions.receiveArticles(response.data));
      }).catch(function () {
        dispatch(actions.errorApi('An error occurred retrieving articles'));
      });
    };
  },

  article: function article(slug) {
    return function (dispatch, getState) {
      var state = getState();
      var endpoint = typeof window === 'undefined' ? state.apiEndpointRootAbsolute : state.apiEndpointRootRelative;
      endpoint = endpoint + '/articles/' + slug;

      return (0, _request2.default)({ endpoint: endpoint, state: state }).then(function (response) {
        dispatch(actions.receiveArticle(response.data));
      }).catch(function () {
        dispatch(actions.errorApi('An error occurred retrieving article: ' + slug));
      });
    };
  },

  receiveArticle: function receiveArticle(article) {
    return {
      type: 'RECEIVE_ARTICLE',
      stateKey: 'article',
      data: article
    };
  },

  receiveArticles: function receiveArticles(articles) {
    return {
      type: 'RECEIVE_ARTICLES',
      stateKey: 'articles',
      data: articles
    };
  },

  errorApi: function errorApi(msg) {
    return {
      type: 'ERROR_API',
      stateKey: 'errorApi',
      data: msg
    };
  }
};

exports.default = actions;
module.exports = exports['default'];
//# sourceMappingURL=dataNeeds.js.map