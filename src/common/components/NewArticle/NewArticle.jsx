import React from 'react';

const Article = () => (
  <div className="article-new">
    <h1 className="heading heading--2 margin-bottom-ml">New article</h1>
    <form action="/api/articles" method="POST">
      <div className="margin-bottom-md">URL slug: <input type="text" name="slug" /></div>
      <div className="margin-bottom-md">Publish data: <input type="date" name="createdDate" /></div>
      <div className="margin-bottom-md">Title: <input type="text" name="title" /></div>
      <div className="margin-bottom-md">Body: <textarea name="contents" /></div>
      <button type="submit">Create</button>
    </form>
  </div>);

export default Article;
