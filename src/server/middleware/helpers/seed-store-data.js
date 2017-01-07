import storeFactory from '../../../common/utils/store-factory';

export default (appConfig, matchedRoute) => {
  return storeFactory({
    apiEndpointRootAbsolute: `${appConfig.appHost}/api/`,
    apiEndpointRootRelative: '/api/',
    matchedRoute: matchedRoute
  });
};
