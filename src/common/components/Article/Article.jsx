import React from 'react';

const Article = props => (
  <div className="">
    <div className="container-fluid-max">
      <div className="row">
        <div className="col-xs-12">
          Article: {
            props.article && props.article.title
          }
        </div>
      </div>
    </div>
  </div>);

export default Article;
