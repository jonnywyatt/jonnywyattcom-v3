import logger from './logger';
import actionsDataNeeds from '../actions/dataNeeds';

export default (dispatch, matchedRoute, state={}) => {
  if (typeof matchedRoute.dataNeed === 'undefined') {
    return Promise.resolve();
  }
  if (matchedRoute.stateKeyToCompare && state[matchedRoute.stateKeyToCompare] === matchedRoute.dataNeedParam) {
    return Promise.resolve();
  }
  if (!matchedRoute.stateKeyToCompare && typeof state[matchedRoute.dataNeed] !== 'undefined') {
    return Promise.resolve();
  }
  return dispatch(actionsDataNeeds[matchedRoute.dataNeed](matchedRoute.dataNeedParam))
    .catch((err) => {
      logger.error(`Error fetching data needs ${matchedRoute.dataNeed}.`, { stack: err.stack });
      throw err;
    });
};
