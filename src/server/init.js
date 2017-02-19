import express from 'express';
import exphbs from 'express-handlebars';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import compression from 'compression';
import logger from '../common/utils/logger';
import reactInit from './middleware/react-init';
import apiArticleFactory from './middleware/api-article';

const app = express();
const hbs = exphbs.create({
  extname: '.hbs',
  defaultLayout: path.join(__dirname, '../../src/server/views/layout')
});
app.set('port', (process.env.PORT || 5000));
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../../src/server/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(compression());
app.use(express.static(path.join(__dirname, '../../public'), {
  maxAge: 86400
}));

const env = app.get('env');
const appConfig = require(`../../config/${env}.json`);
const apiArticle = apiArticleFactory(appConfig);

app.get('/api/articles/:slug', apiArticle.getBySlug);
app.get('/api/articles', apiArticle.getAll);
app.post('/api/articles', apiArticle.post);

app.get('*', reactInit(appConfig).init);
app.listen(app.get('port'), () => {
  logger.info('Node app is running on port ' + app.get('port'));
});

module.exports = app;
