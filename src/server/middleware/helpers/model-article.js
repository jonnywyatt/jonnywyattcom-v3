import mongoose from './db';

const Article = mongoose.model('Article', {
  slug: { type: String, required: true },
  title: { type: String, required: true },
  createdDate: { type: Date, required: true },
  contents: { type: String, required: true }
});

export default Article;
