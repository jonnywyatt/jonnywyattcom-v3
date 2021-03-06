import mongoose from 'mongoose';
import logger from '../../../common/utils/logger';

const uristring =
  process.env.MONGODB_URI ||
  'mongodb://localhost/local';

mongoose.connect(uristring, (err) => {
  if (err) {
    logger.error('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    logger.info('Succeeded connected to: ' + uristring);
  }
});

export default mongoose;
