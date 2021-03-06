import {pathToRegexp} from 'path-to-regexp';
import redirectUrls from './redirectUrls';

export default (path, cb) => {
  const routeData = {
    path
  };

  switch (routeData.path) {
    case '/':
      routeData.routeName = 'home';
      routeData.deferredDataNeed = 'articles';
      break;

    case '/contact':
      routeData.routeName = 'contact';
      break;

    case '/articles/new':
      routeData.routeName = 'article-new';
      break;

    case '/articles':
      routeData.routeName = 'articles';
      routeData.dataNeed = 'articles';
      break;

    default: {
      const longPath = pathToRegexp('/articles/:articleId', [], { end: false });
      const matched = longPath.exec(routeData.path);
      if (matched && matched.length) {
        routeData.routeName = 'article';
        routeData.dataNeed = 'article';
        routeData.stateKeyToCompare = 'articleId';
        routeData.dataNeedParam = matched[1];
        routeData.redirectUrl = redirectUrls(matched[1]);
        break;
      }
      return cb({
        httpCode: '404'
      });
    }
  }

  cb(null, routeData);
};
