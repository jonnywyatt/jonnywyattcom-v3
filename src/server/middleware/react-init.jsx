import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import logger from '../../common/utils/logger';

import App from '../../common/containers/App';
import matchRoute from '../../common/utils/match-route';
import fetchDataNeeds from '../../common/utils/fetch-data-needs';
import seedStore from './helpers/seed-store-data';

export default (appConfig, env) => ({
  init: (req, res) => {
    matchRoute(req.originalUrl, (error, matchedRoute) => {
      if (error) {
        return res.status(error.httpCode).send();
      }
      if (matchedRoute.redirectUrl) {
        return res.redirect(301, `/articles/${matchedRoute.redirectUrl}`);
      }
      const store = seedStore(
        appConfig,
        matchedRoute,
        req
      );
      return fetchDataNeeds(store.dispatch, matchedRoute)
        .then(() => {
          const appHtml = renderToString(
            <Provider store={store}>
              <App />
            </Provider>
          );
          let jsBundle = 'client.js';
          if (env === 'production') {
            const staticAssetManifest = require('../../../public/rev-manifest.json'); // eslint-disable-line
            jsBundle = staticAssetManifest[jsBundle];
          }
          res.render('index', {
            appHtml,
            appState: JSON.stringify(store.getState()).replace(/<\//g, '\\x3C/'),
            jsBundle
          });
        })
        .catch((err) => {
          logger.error(err);
          res.render('error', { error: err.displayError || 'Application rendering error', noAnalytics: true });
        });
    });
  }
});
