import React from 'react';

const Article = props => (
  <div className="view article">
    <div className="container-fluid-max">
      <div className="row">
        <div className="col-12-sm">
          <h1 className="heading heading--2 margin-bottom-ml">{ props.title }</h1>
          <div dangerouslySetInnerHTML={{ __html: props.contents }} />
        </div>
      </div>
    </div>
  </div>);

Article.defaultProps = {
  title: ''
};

export default Article;
