import axios from 'axios';
import logger from './logger';

export default (options) => {
  return axios.get(options.endpoint)
    .catch((err) => {
      logger.error(err);
    });
};
