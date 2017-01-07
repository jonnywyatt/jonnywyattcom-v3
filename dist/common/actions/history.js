'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _matchRoute = require('../utils/match-route');

var _matchRoute2 = _interopRequireDefault(_matchRoute);

var _fetchDataNeeds = require('../utils/fetch-data-needs');

var _fetchDataNeeds2 = _interopRequireDefault(_fetchDataNeeds);

var _logger = require('../utils/logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var historyActions = {
  listenForRouteChanges: function listenForRouteChanges() {
    return function (dispatch, getState) {
      var state = getState();
      var history = state.history;
      /* We need to populate the history state with data for the current page.
       So if the user navigates away then clicks the back button, its state can be restored */
      history.replaceState(state.matchedRoute, null, document.location.href);
      history.Adapter.bind(window, 'statechange', function () {
        var matchedRoute = history.getState().data;
        if (state.matchedRoute.path !== matchedRoute.path) {
          window.document.documentElement.classList.add('loading');
          (0, _fetchDataNeeds2.default)(dispatch, matchedRoute, state).then(function () {
            window.document.documentElement.classList.remove('loading');
            // if (typeof window !== 'undefined' && !matchedRoute.preventAnalyticsEvents) {
            //   dispatch(actions.analyticsPageView(matchedRoute));
            // }
          });
        }
        dispatch(historyActions.afterRouteChange(matchedRoute));
      });
    };
  },

  startRouteChange: function startRouteChange(target) {
    return function (dispatch, getState) {
      var history = getState().history;
      var url = target.currentTarget.pathname;
      (0, _matchRoute2.default)(url, function (err, matchedRoute) {
        if (err) {
          _logger2.default.error('Route not matched: ' + url);
          return;
        }
        target.preventDefault();
        history.pushState(matchedRoute, null, url);
      });
    };
  },

  afterRouteChange: function afterRouteChange(matchedRoute) {
    return {
      type: 'AFTER_ROUTE_CHANGE',
      stateKey: 'matchedRoute',
      data: matchedRoute
    };
  }
};

exports.default = historyActions;
module.exports = exports['default'];
//# sourceMappingURL=history.js.map