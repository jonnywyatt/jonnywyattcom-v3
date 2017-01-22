import React, { PropTypes } from 'react';

const Articles = props => (
  <div className="view articles">
    <div className="container-fluid-max">
      <div className="row">
        <div className="col-12-sm">
          {
            props.articles && props.articles.map((article, idx) => (<div key={idx}><a href={`/articles/${article.slug}`} onClick={props.startRouteChange}>{article.title}</a></div>))
          }
        </div>
      </div>
    </div>
  </div>);

Articles.propTypes = {
  startRouteChange: PropTypes.func.isRequired
};

export default Articles;
