import ModelArticle from './helpers/model-article';
import logger from '../../common/utils/logger';

export default () => {
  return {
    getBySlug: (req, res) => {
      ModelArticle.find({ slug: req.params.slug }).lean().exec((err, articles) => {
        if (err) {
          logger.error(err);
          return res.status(500);
        }
        res.json(articles[0] || {});
      });
    },
    getAll: (req, res) => {
      ModelArticle.find().lean().exec((err, articles) => {
        if (err) {
          logger.error(err);
          return res.status(500);
        }
        res.json(articles);
      });
    },
    post: (req, res) => {
      const article = new ModelArticle({
        slug: req.body.slug,
        createdDate: new Date().toISOString(),
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
