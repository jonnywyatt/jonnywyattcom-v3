import React from 'react';

const Article = () => (
  <div className="">
    <form action="/api/articles" method="POST">
      <div>Title: <input type="text" name="title" /></div>
      <div>Body: <textarea name="contents" /></div>
    </form>
  </div>);

export default Article;
