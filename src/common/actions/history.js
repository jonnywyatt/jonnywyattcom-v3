import matchRoute from '../utils/match-route';
import fetchDataNeeds from '../utils/fetch-data-needs';
import errorActions from './error';
import logger from '../utils/logger';

const historyActions = {
  listenForRouteChanges: () => {
    return (dispatch, getState) => {
      const state = getState();
      const history = state.history;
      /* We need to populate the history state with data for the current page.
       So if the user navigates away then clicks the back button, its state can be restored */
      history.replace(document.location.pathname, state.matchedRoute );
      history.listen((location, action) => {
        if (action !== 'REPLACE') {
          const matchedRoute = location;
          if (state.matchedRoute.path !== matchedRoute.pathname) {
            window.document.documentElement.classList.add('loading');
            fetchDataNeeds(dispatch, matchedRoute.state, getState())
              .then(() => {
                window.document.documentElement.classList.remove('loading');
                // if (typeof window !== 'undefined' && !matchedRoute.preventAnalyticsEvents) {
                //   dispatch(actions.analyticsPageView(matchedRoute));
                // }
              });
          }
          dispatch(historyActions.afterRouteChange(matchedRoute));
        }
      });
    };
  },

  startRouteChange: (target) => {
    return (dispatch, getState) => {
      dispatch(errorActions.error());
      const history = getState().history;
      const url = target.currentTarget.pathname;
      matchRoute(url, (err, matchedRoute) => {
        if (err) {
          logger.error('Route not matched: ' + url);
          return;
        }
        target.preventDefault();
        window.scrollTo(0, 0);
        history.push(url, matchedRoute);
      });
    };
  },

  afterRouteChange: (matchedRoute) => {
    return {
      type: 'AFTER_ROUTE_CHANGE',
      stateKey: 'matchedRoute',
      data: matchedRoute.state
    };
  }
};

export default historyActions;
