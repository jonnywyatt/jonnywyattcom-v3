import logger from './logger';
import actionsDataNeeds from '../actions/dataNeeds';

export default (dispatch, matchedRoute) => {
  if (matchedRoute.dataNeed) {
    return dispatch(actionsDataNeeds[matchedRoute.dataNeed](matchedRoute.dataNeedParam))
      .catch((err) => {
        logger.error(`Error fetching data needs ${matchedRoute.dataNeed}.`, { stack: err.stack });
        throw err;
      });
  }
  return Promise.resolve();
};
