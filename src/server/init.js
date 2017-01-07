import reactInit from './middleware/react-init';
import logger from '../common/utils/logger';

const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

// view engine setup
const hbs = exphbs.create({
  extname: '.hbs',
  defaultLayout: path.join(__dirname, '../../src/server/views/layout')
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../../src/server/views'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));

const env = app.get('env');
const appConfig = require(`../../config/${env}.json`);
app.get('*', reactInit(appConfig).init);
logger.info('Application started on port 3000');
app.listen(3000);

module.exports = app;
