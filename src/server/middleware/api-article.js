import moment from 'moment';
import _compact from 'lodash.compact';
import ModelArticle from './helpers/model-article';
import logger from '../../common/utils/logger';

const formatCreatedDate = (article) => {
  if (article) {
    article.createdDateDisplay = moment(article.createdDate).format('D MMM YYYY');
  }
  return article;
};

export default () => {
  return {
    getBySlug: (req, res) => {
      ModelArticle.find({ slug: req.params.slug }).lean().exec((err, articles) => {
        if (err) {
          logger.error(err);
          return res.status(500);
        }
        if (!articles) {
          logger.info('Article not found: ' + req.params.slug);
          return res.status(404);
        }
        res.json(formatCreatedDate(articles[0]) || {});
      });
    },
    getAll: (req, res) => {
      ModelArticle.find().sort({ createdDate: 'desc' }).lean().exec((err, articles) => {
        if (err) {
          logger.error(err);
          return res.status(500);
        }
        res.setHeader('Cache-Control', 'no-cache');
        const json = _compact(articles.map(article => formatCreatedDate(article))) || [];
        res.json(json);
      });
    },
    post: (req, res) => {
      const article = new ModelArticle({
        slug: req.body.slug,
        createdDate: moment(req.body.createdDate).toISOString(),
        title: req.body.title,
        contents: req.body.contents
      });
      article.save((err, article) => {
        if (err) {
          logger.error(err);
          return res.status(500);
        }
        if (req.xhr) return res.status(201).json(article);
        return res.redirect(`/articles/${article.slug}`);
      });
    }
  };
};
