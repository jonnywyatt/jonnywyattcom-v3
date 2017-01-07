import mongoose from 'mongoose';
import logger from '../../common/utils/logger';

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
const uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/HelloMongoose';

// The http server will listen to an appropriate port, or default to
// port 5000.
// const theport = process.env.PORT || 5000;

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, (err, res) => {
  if (err) {
    logger.error('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    logger.info('Succeeded connected to: ' + uristring);
    logger.info(res);
  }
});
