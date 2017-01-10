import mongoose from 'mongoose';
import logger from '../../../common/utils/logger';

const uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/jonnywyattcom';

mongoose.connect(uristring, (err, res) => {
  if (err) {
    logger.error('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    logger.info('Succeeded connected to: ' + uristring);
    logger.info(res);
  }
});

export default mongoose;
