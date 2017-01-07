'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = {
  getArticle: function getArticle() {
    return function (dispatch, getState) {
      var state = getState();
      var endpoint = typeof window === 'undefined' ? state.apiEndpointAbsolute : state.apiEndpointRelative;

      return request({ endpoint: endpoint, state: state }).then(function (response) {
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
//# sourceMappingURL=actions.js.map